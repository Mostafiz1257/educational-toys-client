import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} | Educational-Toys`
        
    },[title])
}

export default useTitle