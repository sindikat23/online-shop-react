import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../utils/apiservice';
import { product_url } from '../utils/urls';
import Loading from '../components/Layout/Loading';

const Products = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const getProducts = async () => {
        let res = await apiClient({
            url:product_url
        })
        console.log(res);
        if (res?.is_success) {
            setData(res.data)
            setLoading(false)
        }
        
        // axios.get("https://fakestoreapi.com/products")
        // .then((res) => {
        //     if (res?.status == 200) {
        //         setData(res?.data)
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }
    useEffect(() => {
        getProducts()
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mahsulotlar ro‘yxati</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105"
              >
                <Link to={`/product-detail/${item.id}`}>
                <img
                  className="w-full h-48 object-contain rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                </Link>
    
                <Link to={`/product-detail/${item.id}`}>
                  <h3 className="h-12 text-lg font-semibold text-gray-800 mt-3 hover:text-blue-600 transition">
                    Title: {item.title.length > 40 ? item.title.slice(0, 40) + "...": item.title }
                  </h3>
                </Link>
                <Link to={`/product-detail/${item.id}`}>
                <p className="text-gray-700 font-medium mt-2 underline">Price: <span className="text-green-600 font-bold underline">{item.price} $</span></p>
                </Link>
                <Link to={`/product-detail/${item.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Buy
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Products