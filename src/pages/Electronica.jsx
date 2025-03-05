import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../utils/apiservice';
import { categories_url, product_url } from '../utils/urls';
import Loading from '../components/Layout/Loading';
import Carsuels from '../components/Carusels';

const Electronica = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const getCategory = async () => {
    let ress = await apiClient({
      url:product_url + `?limit=194&skip=0`
    })
    if (ress?.is_success) {
      setCategory(ress?.data)
      setLoading(false)
      
    }

  }
  const getProducts = async () => {
    let res = await apiClient({
      url: product_url + `?limit=194&skip=0`
    })
    if (res?.is_success) {
      setData(res.data.products)
      setLoading(false)
    }

  }
  useEffect(() => {
    getCategory()
  }, [])
  useEffect(() => {
    getProducts()
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div className="container mx-auto px-2 py-3">
      <Carsuels />

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Electronics</h2>

      <div className='flex gap-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item) => {
            if (item.category == "laptops" || item.category == "smartphones") {

              return (
                <div
                  key={item.id}
                  className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105"
                >
                  <Link to={`/product-detail/${item.id}`}>
                    <img
                      className="w-full h-48 object-contain rounded-lg"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </Link>

                  <Link to={`/product-detail/${item.id}`}>
                    <h3 className="h-12 text-lg font-semibold text-gray-800 mt-3 hover:text-blue-600 transition">
                      Title: {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
                    </h3>
                  </Link>
                  <Link to={`/product-detail/${item.id}`}>
                    <p className="text-gray-700 font-medium mt-2 underline">Price: <span className="text-green-600 font-bold underline">{item.price} $</span></p>
                  </Link>
                    <button className="mt-4 w-full border border-blue-600 font-semibold bg-blue-600 text-white py-2 rounded-lg active:bg-blue-400 transition">
                      Buy
                    </button>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Electronica