import React, { useState } from "react";
import CartTotal from "./CartTotal";
const PlaceOder = ()=>{

    

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4  pt-5 sm:pt-14 min-h-[80hv] boredr-t ">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3 ">
                    <h1 className="text-gray-400 text-xl">DELIVERY <span className="text-black">INFORMATION</span></h1>

                </div>
                <div className="flex gap-3 ">
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="Frirst name"/>
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="Last name"/>

                </div>
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="Email" placeholder="Email address"/>
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="Street"/>


                    <div className="flex gap-3 ">
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="City"/>
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="State"/>

                </div>
                    <div className="flex gap-3 ">
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="text" placeholder="Country"/>
                    

                </div>
                    <input className="border border-gray-300  rounded py-1.5 px-3.5 w-full " type="number" placeholder="Phone"/>

            </div>
            {/* --------------rght side---------------- */}
            <div className="mt-8 ">
                <div className="mt-8 min-w-80">
                    <CartTotal/>

                </div>
                <div className="mt-12 ">
                    <h1>PYMENT <span>METHOD</span></h1>

                    {/* ----------payment method ---------------- */}
                    <div className="flex gap-3 flex-col lg:flex-row ">
                        <div className="flex items-center gap-3  border p-2  px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
                            <img src="" alt="" />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default PlaceOder