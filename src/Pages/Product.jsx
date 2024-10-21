import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import RealatedProducts from "../Components/RealatedProducts"

function Product() {

    const { productId } = useParams()

    const { products, addToCartIem} = useContext(ShopContext)
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState("")

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])

                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])


    return productData ? <div>

   
     <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100 ">
        {/* product data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row  ">

            {/* product images */}

            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row  ">

                <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">


                    {
                        productData.image.map((item) => (
                            <img onClick={() => setImage(item)} src={item} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer " alt="" />
                        ))
                    }


                </div>

                <div className="w-full sm:w-[80%]  ">
                    <img className="w-full h-auto" src={image} />
                </div>

            </div>

            {/* -----product--iformation----- */}
            <div className="flex-1 ">
                <h1 className="font-medium text-2xl mt-2">{productData.name} </h1>
                <p className="font-medium text-3xl mt-5 ">${productData.price} </p>
                <p className="mt-5 text-gray-500  ">{productData.description} </p>
            
                <button onClick={()=> addToCartIem(productData._id)} className="bg-black text-white px-8 py-3 text-sm mt-4 active:bg-gray-700">ADD TO CART</button>
                    <hr className="mt-8 sm:w-4/5 " />
                    <div className="text-sm text-gray-500 mt-5 flex-col gap-1 ">
                    <p>100% Original products.</p>
                    <p>Cash on delivery is available on this product.</p> 
                    <p>Easy Return and exchange policy whithin 7 days.</p>
                    </div>
            </div>
        </div>



    </div>
        <div className="text-center ">
            {/* Related Products */}
            <h1 className="font-bold text-3xl">Relate Products</h1>
            <RealatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    </div>
        : <div className="opacity-0 "> </div>
}
export default Product