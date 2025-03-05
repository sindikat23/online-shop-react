import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartList'
import Noproduct from '../components/Noproduct'

import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import Carusels from '../components/Carusels'

const Carts = () => {
    const context = useContext(CartContext)

    const getAllSumm = () => {
        let summ = 0
        context.cart.forEach(element => {
            summ += (element.price * element.count)
        });
        return summ.toFixed(2)
    }

    if (context?.cart.length == 0) {
        return (
            // <p className='my-40 text-2xl text-center'>Savatcha bo'sh</p>
            <Noproduct />
        )
    }
    return (
        <div className='container mx-auto cursor-default'>
            <h1 className='underline text-3xl font-bold  my-4 text-center text-green-400'>Cart <span className='underline text-orange-400'>List</span></h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-y-3 py-3 px-4 overflow-y-scroll max-h-[440px]'>
                    {
                        context?.cart?.map((product, index) => {
                            return <div key={product?.id} className='grid grid-cols-3 bg-[#F5F5F5] gap-3 p-2 rounded-lg shadow shadow-gray-600'>
                                <div key={product.id}
                                    className='col-span-1 bg-white'>
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>
                                <div className='col-span-2 px-2 flex flex-col justify-between'>
                                    <p className='text-lg text-blue-500 font-semibold'>
                                        Title: <span className='text-green-500'>{product?.title}</span></p>
                                    <div className='flex'>
                                        <div className='flex gap-3 items-center p-1 rounded-lg bg-[#0000004D] text-white font-bold text-lg'>
                                            <button className='text-gray-700 px-2 py-0.5 bg-white rounded-sm active:bg-red-300'
                                                onClick={() => { context.decr(index) }}
                                            >-</button>
                                            <span>{product.count}</span>
                                            <button
                                                className='text-gray-700 px-1.5 py-0.5 bg-white rounded-sm active:bg-green-300'
                                                onClick={() => { context.incr(index) }}
                                            >+</button>
                                        </div>
                                    </div>
                                    <p className='text-lg text-blue-500 font-medium'>
                                        Category: <span className='text-orange-400'>{product.category}</span></p>
                                    <div className='flex justify-between'>
                                        <p className='text-lg text-blue-500 font-medium'>Price: <span className='underline text-green-400'>{product.price} $</span></p>
                                        <button className='text-white font-semibold px-1.5 py-0.5 bg-red-500 rounded-sm active:bg-red-400'
                                            onClick={() => { context.deleteBtn(index) }}
                                        ><MdDeleteForever /></button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='px-8 max-h-[440px]'>
                    <p className='text-xl font-semibold py-2 text-blue-500'>Buyurtma uchun malumotlar</p>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="">Name:</label>
                            <input className='w-2/3 outline-0 px-2 py-1 border border-gray-200 rounded-lg' type="text" placeholder='Anton' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="">Surname:</label>
                            <input className='w-2/3 outline-0 px-2 py-1 border border-gray-200 rounded-lg' type="text" placeholder='Chexov' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="">Telephone:</label>
                            <input className='w-2/3 outline-0 px-2 py-1 border border-gray-200 rounded-lg' type="tel" placeholder='+998 90 123 45 67' />
                        </div>
                        <h2 className='text-xl font-semibold py-2'>Delivery</h2>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="region">Region:</label>
                            <select id="region" className='w-2/3 outline-0 border border-gray-300 px-2 py-1 rounded-lg'>
                                <option value="1">Qaraqalpaqstan Respublikasi</option>
                                <option value="2">Tashkent shahri</option>
                                <option value="3">Samarqand viloyati</option>
                                <option value="4">Buxoro viloyati</option>
                            </select>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="">Address:</label>
                            <input className='w-2/3 outline-0 px-2 py-1 border border-gray-200 rounded-lg' type="text" placeholder='"Street,  home: 1/2"' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='w-1/3 text-violet-500 font-medium' htmlFor="">Comment:</label>
                            <input className='w-2/3 outline-0 px-2 py-1 border border-gray-200 rounded-lg' type="" placeholder='Gooo Comment' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <div className='flex justify-evenly items-center mb-4'>
                    <p className='text-2xl font-semibold'>Total: <span className='text-violet-700 underline'>{getAllSumm()} $</span></p>
                    <button className='px-2 py-1 text-xl text-white font-semibold rounded-lg border border-violet-600 bg-violet-600 active:bg-violet-400 '><Link to={'/products'}>Design</Link></button>
                </div>
                <Carusels/>
            </div>
        </div>
    )
}

export default Carts