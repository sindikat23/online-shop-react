import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../utils/apiservice';
import { categories_url, product_url } from '../utils/urls';
import Loading from '../components/Layout/Loading';
import Carsuel from '../components/Carusel';
import Carusel from '../components/Carusel';

const About = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const getCategory = async () => {
    let ress = await apiClient({
      url: categories_url
    })
    // console.log(ress.data);
    if (ress?.is_success) {
      setCategory(ress?.data)
      setLoading(false)
    }

  }
  const getProducts = async () => {
    let res = await apiClient({
      url: product_url
    })
    // console.log(res);
    if (res?.is_success) {
      setData(res.data.products)
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
      <Carusel />

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mahsulotlar ro‘yxati about</h2>

      <div className='flex gap-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item, index) => {
            if (item.price > 200) {
              // console.log(item.price +" aaa "+index);

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

export default About