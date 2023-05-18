import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Gallary = () => {
    const [toys, setToys] = useState();
    useEffect(()=>{
        fetch('toys.json')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div className="mt-12  ">
            <div className="text-center w-1/2  justify-center mx-auto">
                <h4 className="font-bold text-xl text-teal-400">Gallery</h4>
                <h1 className="text-4xl font-bold text-teal-400">Take Your Toys Now....!</h1>
                <p className="font-bold">Here you can see many types of toys.You can choose it.After choosing them you can buy and take it for your children</p>
            </div>
          <div className="grid md:grid-cols-4 mt-12 mb-12 gap-6">
            {
                toys?.map(toy=><ToyCard key={toy.id} toy={toy}></ToyCard>)
            }
          </div>
        </div>
    );
};

export default Gallary;