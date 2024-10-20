import {Link} from "react-router-dom"
function ProductItem({id,name,image,price}){
    return <div>
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
        <img className="hover:scale-125 transition ease-in-out " src={image[0]}  />
        </div>
        <p className="pt-3 pb-1 text-sm ">{name} </p>
        <p className="text-sm font-medium">${price} </p>
        </Link>
    </div>
}
export default ProductItem