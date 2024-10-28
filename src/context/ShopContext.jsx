import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
  
export const ShopContext = createContext()

const ShopContextProvider = (props)=>{

    const [search, setSearch] = useState("")
    const [cartItems, setCartItems] = useState({})
    const delivery_fee = 2; 
    const navigate = useNavigate()
    


    const addToCartIem = (itemId) => {
        let cartData = structuredClone(cartItems);  // Nuqul cusub oo ka mid ah xogta hadda jirta
    
        // Haddii itemId uu horay ugu jiro gaadhiga, kudar 1
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            // Haddii sheygu horay ugu jirin, samee tiro 1
            cartData[itemId] = 1;
        }
    
        setCartItems(cartData);  // Dib u cusboonaysii cartItems 
        toast.success("Item has been added successfully");
    };
    


    const getCartCount = () => {
        let totalCount = 0;
    
        // Isku xisaabi tirada shey kasta oo ku jira gaadhiga
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];  // Ku dar tirada sheyga itemId-gaas
        }
    
        return totalCount;  // Soo celi tirada guud ee sheyga
    };


    const updateQuantity = async (itemId,quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);

    }
    const getCartAmount = () => {
        let totalAmount = 0;
        
        // Loop garee `cartItems` si aad u hesho shey kasta oo ku jira gaadhiga
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId); // Hel xogta sheyga la dhigaya `itemId`
            
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId]; // Kordhi wadarta qiimaha iyadoo la adeegsanayo tirada
            }
        }
        
        return totalAmount;
    };
    
       






    // useEffect(()=>{
    //     console.log(cartItems);
        
    // },[cartItems])



        const value ={
            products,
            search, 
            setSearch, 
            cartItems,
            addToCartIem,
            getCartCount,
            updateQuantity,
            getCartAmount,
            delivery_fee, navigate
        }

        return (
            <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
        )
}
export default ShopContextProvider