import { useContext, useEffect, useState } from "react"
import {ShopContext} from "../context/ShopContext"
import ProductItem from "./ProductItem"
function LatestCollection(){

    const {products} = useContext(ShopContext)
    const [LatestProducts, setLatestProducts] = useState([])
    

    useEffect(()=>{
        setLatestProducts(products)
    },[])



    return <div >
        <h1 className="text-4xl font-bold text-center pt-5 border-b-2 border-[#e26d5c] ">Latest Collection</h1>
   
   <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

   {
       LatestProducts.map((item,index)=>(
           <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
    }
    </div>
    </div>
}
export default LatestCollection