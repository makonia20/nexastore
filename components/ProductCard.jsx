'use client'
import { StarIcon, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/lib/features/cart/cartSlice'
import toast from 'react-hot-toast'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const quantity = cartItems[product.id] || 0

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(addToCart({ productId: product.id }))
        toast.success(`Added to cart`)
    }

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-60 max-xl:mx-auto'>
            <div className='relative bg-slate-50 aspect-square sm:aspect-[4/5] flex items-center justify-center p-6 overflow-hidden'>
                <Image width={500} height={500} className='object-cover w-full h-full rounded-xl group-hover:scale-110 transition-transform duration-500 ease-in-out' src={product.images[0]} alt={product.name} />
                
                {/* Floating Add Overlay */}
                <button onClick={handleAddToCart} className='absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-md hover:bg-teal-600 hover:text-white text-slate-600 transition-all duration-300 z-10'>
                    <Plus size={18} className='transition-colors' />
                    {quantity > 0 && <span className='absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full shadow'>{quantity}</span>}
                </button>
            </div>
            
            <div className='flex flex-col flex-1 p-5 gap-2'>
                <div className='flex justify-between items-start gap-3'>
                    <h3 className='font-semibold text-slate-800 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors'>{product.name}</h3>
                    <p className='font-bold text-teal-600 text-base whitespace-nowrap'>{currency}{product.price}</p>
                </div>
                
                <div className='flex items-center gap-2 mt-auto pt-2'>
                    <div className='flex'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={14} className='text-transparent' fill={rating >= index + 1 ? "#14B8A6" : "#E5E7EB"} />
                        ))}
                    </div>
                    <span className='text-xs font-medium text-slate-400'>({product.rating?.length || 0})</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard