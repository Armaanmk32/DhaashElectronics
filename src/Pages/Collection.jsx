import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../Components/ProductItem";
import SearchBar from "./SearchBar";

function Collection(){


    
    const {products, search} = useContext(ShopContext);
    const [filterProduct, setFilterProduct] = useState([])
    const [category, setCtegory] = useState([])
    const [sortType, setSortType] = useState("relavent")





    const toggleCategory =(e)=>{
        if(category.includes(e.target.value)){
            setCtegory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setCtegory(prev => [...prev,e.target.value])
        }
    }

 

    const applyFilter =()=>{
       let productCopy = products.slice()

        if(search){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }


        if(category.length > 0){
        productCopy = productCopy.filter(item => category.includes(item.category))
        }
       

        setFilterProduct(productCopy)
    }

    // product sort 

    const productSort =()=>{
        let fpProduct = filterProduct.slice()
        switch(sortType){
            case "low-high":
                setFilterProduct(fpProduct.sort((a,b)=>(a.price - b.price)));
                break;

            case "high-low":
                setFilterProduct(fpProduct.sort((a,b)=>(b.price - a.price)));
                break;

            default:
                applyFilter();
                break;
        }
    }


    // useEffect igaan aan comment saaray waa marka lasoo aqrinaayey api ga aan samesanay 
    // useEffect(()=>{
    //     setFilterProduct(products)
    // },[])

    useEffect(()=>{
        applyFilter()
        productSort()
    },[category,sortType,search])

    



    return <div>
        <SearchBar />
     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t  ">
        {/* Filter option */}
        <div className="min-w-60">
            <div className="flex justify-between mt-4">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2 ">FILTERS</p>

        <select onChange={(e)=> setSortType(e.target.value)} className="border-2  border-gray-300 text-sm px-2  "> 
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
        </select>
            </div>
        {/* Category Filter */}
        <div className="border border-gray-300 pl-5 py-3 my-3"> 
            <p className="mb-3 text-sm font-medium  ">CATEGORIES</p>
            <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'iphone'} onChange={toggleCategory} /> Iphone
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'Laptop'} onChange={toggleCategory} /> Laptop
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'charger'} onChange={toggleCategory} /> Charger
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'Keyboard'} onChange={toggleCategory} /> Keyboard
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'Watches'} onChange={toggleCategory} /> Watches
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'Muse'} onChange={toggleCategory} /> Muse
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'Headphone'} onChange={toggleCategory} /> HeadPhone
                </p>
                <p className="flex gap-2 ">
                    <input className="w-3 " type="checkbox" value={'HandGame'} onChange={toggleCategory} /> HandGame
                </p>
            </div>
        </div>


       
        </div>
        {/* map products */}
        <div className="grid mt-10 grid-cols-s md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
        {
            filterProduct.map((item)=>(
                <ProductItem name={item.name} id={item._id} image={item.image} price={item.price} />
            ))
        }
        </div>
    </div>
    </div>

}
export default Collection