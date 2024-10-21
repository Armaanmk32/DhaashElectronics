import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
function Header() {

    const {getCartCount} = useContext(ShopContext)
    
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true)
    }

    const handlClose = () => {
        setVisible(false)
    }

    return <div className="sm:flex  relative justify-between sm:px-16 items-center border-b-2 border-black shadow-2xl rounded-3xl m-5  p-4">
        
        <Link to="/"> <h1 className="sm:text-2xl text-xl text-[#e26d5c]  font-medium"> <span className="text-black"> Dhaash</span>Electronics</h1> </Link> 

        <ul style={{ display: visible == true ? "block" : "" }} className="sm:flex hidden sm:p-0 p-2 gap-6 text-sm font-medium">
            <Link to="/">
                <li className="p-2 ">Home</li>
                <hr className="w-[40px] bg-gray-700 h-[1.5px] border-none hidden" />
            </Link>

            <Link to="/collection">
                <li className="p-2 ">Collection</li>
                <hr className="w-[65px] bg-gray-700 h-[1.5px] border-none hidden" />

            </Link>

            <Link to="/about">
                <li className="p-2 ">About</li>
                <hr className="w-[40px] bg-gray-700 h-[1.5px] border-none hidden" />

            </Link>

            <Link to="/contact">
                <li className="p-2 ">Contact Us</li>
                <hr className="w-[65px] bg-gray-700 h-[1.5px] border-none hidden" />

            </Link>

        </ul>

        <div className="flex  items-center gap-6">
            <div className="absolute top-5 right-4 flex sm:gap-6 gap-2 items-center">

                <Link to="/collection">
                <i className="cursor-pointer text-xl fa-solid fa-magnifying-glass"></i>
                </Link>

                <div className="group relative">
                    <i className=" cursor-pointer text-xl fa-regular fa-user"></i>
                    <div className="hidden group-hover:block absolute right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">

                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Order</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>

                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <i class="cursor-pointer text-xl fa-solid fa-cart-shopping"></i>
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">{getCartCount()} </p>
                </Link>
                
                <div className="sm:hidden">

                <i style={{ display: visible == true ? "none" : "block" }} onClick={handleClick} class="  text-2xl fa-solid fa-bars"></i>
                <i style={{ display: visible == true ? "block" : "none" }} onClick={handlClose} class=" hidden text-2xl fa-solid fa-circle-xmark"></i>
                </div>
            </div>

        </div>


    </div>
}
export default Header 