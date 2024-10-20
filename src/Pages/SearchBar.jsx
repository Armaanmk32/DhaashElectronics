import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

function SearchBar(){

    const {search, setSearch} = useContext(ShopContext)


    return <div className="border-t border-b bg-gray-50 text-center ">
        <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:h-1/2 ">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm " type="text" placeholder="search " />
        <i className="cursor-pointer text-xl fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
}
export default SearchBar