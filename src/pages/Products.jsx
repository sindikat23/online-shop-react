import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../utils/apiservice';
import { categories_url, product_url } from '../utils/urls';
import Loading from '../components/Layout/Loading';
import Carusel from '../components/Layout/Carusel';
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(null)
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(0)
  const [skip, setSkip] = useState(1)

  const getProducts = async () => {
    let res = await apiClient({
      url: category == null ? product_url + `?limit=18&skip=${(skip - 1) * 18}` : product_url + `/category/${category}?limit=18&skip=${(skip - 1) * 18}`
      
    })
    console.log(res?.data.products);
    if (res?.is_success) {
      setData(res.data.products)
      createPagination(res?.data.total)
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
  const getCategories = async () => {
    let res = await apiClient({
      url: categories_url,
      method: "GET"
    })
    if (res?.is_success) {
      setCategories(res?.data)
      setLoading(false)
    }
  }

  // const getCategory = async () => {
  //   let ress = await apiClient({
  //     url: category_url
  //   })
  //   // console.log(ress.data);
  //   if (ress?.is_success) {
  //     setCategory(ress?.data)
  //     setLoading(false)
  //   }

  // }
  useEffect(() => {
    getProducts()
  }, [category, skip])
  useEffect(() => {
    getCategories()
  }, [])

  const searchHandle = async () => {
    let res = await apiClient({
      method: "GET",
      url: `/products/search?q=${search}`
    })
    if (res?.is_success) {
      createPagination(res?.data.total)
      setData(res?.data?.products)
      setLoading(false)
    }
    else {
      <p>Mahsulot topilmadi</p>
    }
  }
  const createPagination = (total) => {
    let current_page = []
    for (let i = 1; i <= Math.ceil(total / 18); i++) {
      current_page.push(i)
    }
    setPage(current_page)
  }
  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mahsulotlar ro‘yxati</h2>
      <div className='flex gap-2 my-4 items-center'>
        <input
          onChange={(val) => {
            if (val.target.value.length > 4 || val.target.value.length == 0) {
              searchHandle()
            }
            else setSearch(val.target.value)
          }}
          type="text"
          className="border border-gray-300 rounded-md px-2 py-1 w-[250px] outline-0"
          placeholder="Search..."
        />
        <button onClick={() => { searchHandle() }} className=" border border-blue-600 bg-blue-600 text-white px-3 py-2 rounded-md active:bg-white active:text-blue-600">
          <FaSearch />
        </button>
      </div>

      <div className='flex items-start gap-4 rounded-lg'>
        {
          data?.length > 0 ? <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-10/13">
              {data?.map((item) => (
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
                  <button className="mt-4 w-full bg-blue-600 border border-blue-600 font-semibold text-white py-2 rounded-lg active:bg-blue-400 transition">
                    Buy
                  </button>
                </div>
              ))}
            </div>

          </>
            :
            <div className='w-11/13 flex justify-center items-center'>
              <p className='text-xl font-semibold text-red-600'>Mahsulot topilmadi!</p>
            </div>
        }
        <div className='w-3/13 rounded-lg py-4 hover:shadow-xl shadow-blue-200 border border-amber-100'>
          <div className='w-full h-[400px] uppercase overflow-y-scroll scroll-my-60'>
            <ul className='cursor-pointer py-2 px-3'>
              <li className='text-center font-semibold text-gray-600 underline'>Category</li>
              <li onClick={() => { setCategory(null) }} className={`font-semibold border border-amber-500 px-1 py-2 my-2 rounded-lg hover:bg-orange-200 ${category == null && "bg-orange-400 text-white hover:bg-orange-400"}`}>All</li>

              {
                categories?.map((item) => {
                  return <li
                    key={item}
                    className={`overflow-hidden border px-1 py-2 my-2 font-semibold border-amber-500 hover:bg-orange-200 rounded-lg ${category == item && "bg-orange-400 text-white hover:bg-orange-400"}`}
                    onClick={() => {
                      setCategory(item)
                      setSkip(1)
                    }}
                  >{item}</li>
                })
              }
            </ul>
          </div>
        </div>

      </div>
      <div className='flex justify-center my-5 gap-4'>
        {
          page != 0 && page?.map((item) => {
            return <button
              key={item}
              className={`border border-amber-500 py-1 px-3 rounded-lg font-semibold hover:bg-amber-200 ${skip == item && "bg-amber-300 shadow shadow-fuchsia-400  text-white"}`}
              onClick={() => {
                setSkip(item)
              }}
            >
              {item}
            </button>
          })
        }
      </div>
      <div className='w-full'>
        <Carusel />
      </div>
    </div>
  );
}

export default Products