import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
const Sub_Category = () => {

    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState('Math')
    useEffect(() => {
        fetch(`http://localhost:5000/category/${activeTab}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [activeTab])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    return (
        <>
            <div className='text-teal-700 font-bold'>
                <div>
                    <div className="mt-12  ">
                        <div className="text-center w-1/2  justify-center mx-auto" data-aos="zoom-out-right">
                            <h4 className="font-bold text-xl text-teal-700">Sub Category</h4>
                            <h1 className="text-4xl font-bold text-teal-700">Take Your Toys Now....!</h1>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList >
                        <Tab onClick={() => handleTabClick("math")}>Math</Tab>
                        <Tab onClick={() => handleTabClick("chemistry")}>Chemistry</Tab>
                        <Tab onClick={() => handleTabClick("english")}>English</Tab>
                    </TabList>
                    <div className='grid md:grid-cols-4 md:gap-5 md:mb-12'>
                        {
                            categories.map(category => <Card key={category._id} category={category}></Card>)
                        }
                    </div>
                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                      
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Sub_Category;