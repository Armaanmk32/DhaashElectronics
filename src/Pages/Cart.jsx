import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import { FaTrash } from 'react-icons/fa';
import CartTotal from "./CartTotal";

function Cart(){
    const {products, cartItems, updateQuantity, navigate} = useContext(ShopContext);
    
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        // Loop-garee cartItems hal mar, maxaa yeelay object-kan wuxuu toos u kaydiyaa { itemId: quantity }
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                // Raadi sheyga u dhigma `itemId` ee ka mid ah products si aad u hesho faahfaahinta sheyga
                const product = products.find((p) => p._id === itemId);  // Haddii product-kaaga uu leeyahay `_id` oo la mid ah `itemId`
                if (product) {
                    tempData.push({
                        ...product,  // Ku dar xogta sheyga
                        quantity: cartItems[itemId]  // Ku dar tirada sheyga
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems, products]);

    return (
        <div className=" border-t pt-14">
            <div className="text-2xl mb-3">
                <h1 className="text-3xl ">Your Cart</h1>
            </div>

            <div>
                {
                    cartData.map((item, index)=>{
                        const productData = products.find((product)=> product._id === item._id);

                        return (
                            <div key={index} className="py-4 border-t boder-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                                <div className="flex items-start gap-6">
                                    <img className="w-16 sm:w-20 " src={productData.image[0]} alt="" />
                                    <div>
                                        <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                                        <div className="flex items-center gap-5 mt-2 ">
                                            <p>${productData.price} </p>

                                        </div>
                                    </div>

                                </div>

                                <input onChange={(e)=> e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, Number(e.target.value))}  
                                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}/>
                                <FaTrash onClick={()=> updateQuantity(item._id,0)}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-end my-20">
                    <div className="w-full sm:w-[450px]">
                        <CartTotal/>
                        <div className="w-full text-end ">
                            <button onClick={()=>navigate("/placeOder")} className="bg-black text-white text-sm my-8 px-8 py-3 ">PROCEED TO CHECKOUT</button>

                        </div>
                    </div> 
            </div>
         
        </div>
    );
}

export default Cart;
