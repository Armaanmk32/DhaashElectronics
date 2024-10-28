import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
    const { delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl">
                <h1 className="text-xl">Cart Totals</h1>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{getCartAmount()}.00</p> {/* Tani waxay soo bandhigeysaa qiimaha alaabada kaliya */}
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Delivery Fee</p>
                    <p>{delivery_fee}.99</p> {/* Kaliya qiimaha delivery_fee */}
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{getCartAmount() + delivery_fee}.99</b> {/* Wadarta guud */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
