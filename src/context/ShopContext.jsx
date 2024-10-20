import { createContext, useState } from "react";
import { products } from "../assets/assets"

export const ShopContext = createContext()

const ShopContextProvider = (props)=>{

    const [search, setSearch] = useState("")


        const value ={
            products, search, setSearch
        }

        return (
            <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
        )
}
export default ShopContextProvider