import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { apiClient } from "../utils/apiservice"
import { product_url } from "../utils/urls"
import Loading from "../components/Layout/Loading"

const ProductDetail = () => {
    const [loading, setLoading] = useState(true)
    const { product_id } = useParams()
    const [product, setProduct] = useState(null)

    const getProductDetail = async () => {
        let res = await apiClient({
            url: `${product_url}/${product_id}`
        })
        console.log(res);

        if (res.is_success) {
            console.log(res?.data);
            setProduct(res?.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductDetail()
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-center py-[30px] text-blue-600 text-4xl font-bold cursor-pointer">Mahsulot:
                <span className="text-orange-500"> {product?.title}</span></h1>
            <header className="p-8 my-10 flex gap-10 shadow shadow-amber-600">
                <div className="w-3/8">
                    <img src={product?.image} alt={product?.title}
                        className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105" />
                </div>
                <div className="w-5/8 grid grid-cols-1">
                    <h1 className="text-[20px] font-semibold text-gray-800 mt-3 hover:text-blue-600">
                        Title: {product?.title}
                    </h1>
                    <p className="text-[20px] font-semibold text-gray-800 mt-3 hover:text-blue-600">
                        Description: {product?.description}
                    </p>
                    <p className=" text-[20px] font-semibold text-gray-800 mt-3 hover:text-blue-600">
                        Count: {product?.rating.count}
                    </p>
                    <p className=" text-[20px] font-semibold text-gray-800 mt-3 hover:text-blue-600">
                        Category: {product?.category}
                    </p>
                    <p className=" text-[20px] font-semibold text-gray-800 mt-3 hover:text-blue-600">
                        Rate: {product?.rating.rate + "🛒"}
                    </p>
                    <p className="text-gray-700 font-medium mt-2 underline">Price: <span className="text-green-600 font-bold underline">{product?.price} $</span></p>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Buy
                    </button>
                </div>
            </header>
        </div>
    )
}

export default ProductDetail