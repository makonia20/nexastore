'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-br from-teal-50 to-teal-100/60 rounded-[2.5rem] shadow-sm border border-white/60 overflow-hidden xl:min-h-[440px] group transition-all duration-700 hover:shadow-2xl hover:-translate-y-2'>
                    {/* The Image moved to the LEFT */}
                    <Image className='absolute bottom-0 left-0 sm:-left-5 h-full w-auto object-cover object-left-bottom mix-blend-multiply opacity-90 sm:max-w-sm lg:max-w-md pointer-events-none transition-all duration-[2000ms] ease-out group-hover:scale-105 group-hover:-rotate-1 group-hover:translate-x-4' src={assets.hero_model_img} alt="Sewing Model" />

                    {/* The Text moved to the RIGHT */}
                    <div className='relative z-10 p-8 sm:p-16 h-full flex flex-col justify-center ml-auto w-full sm:w-[55%] lg:w-1/2'>
                        <div className='inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm text-teal-700 pr-4 p-1.5 rounded-full text-xs font-semibold shadow-sm w-max mb-6 border border-white/50'>
                            <span className='bg-teal-600 px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-wider'>News</span> Free Delivery on Orders Above $50! <ChevronRightIcon className='group-hover:translate-x-1 transition-transform' size={14} />
                        </div>
                        <h2 className='text-4xl sm:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-800 max-w-lg'>
                            Craft Your <br/><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400'>Masterpiece.</span>
                        </h2>
                        <div className='flex items-end gap-4 text-slate-700 font-medium mb-8'>
                            <div>
                                <p className='text-xs uppercase tracking-wider text-slate-500 mb-1'>Starting From</p>
                                <p className='text-3xl font-bold'>{currency}4.90</p>
                            </div>
                        </div>
                        <button className='w-max bg-slate-800 text-white font-medium text-sm py-4 px-10 rounded-full shadow-lg shadow-slate-800/20 hover:bg-teal-600 hover:shadow-teal-600/30 hover:-translate-y-1 active:scale-95 transition-all duration-300'>Explore Collection</button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row xl:flex-col gap-6 w-full xl:max-w-sm text-sm text-slate-600'>
                    <div className='flex-1 relative flex items-center justify-between w-full bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-3xl p-8 shadow-sm border border-white/60 overflow-hidden group hover:shadow-md transition-all'>
                        <div className='relative z-10'>
                            <p className='text-xs uppercase tracking-wider text-rose-500 font-bold mb-2'>Professional Grade</p>
                            <p className='text-3xl font-bold text-slate-800 max-w-40 leading-tight mb-4'>Premium <br/>Machines</p>
                            <button className='flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors'>View Lineup <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={16} /></button>
                        </div>
                        <Image className='absolute -right-4 top-1/2 -translate-y-1/2 w-48 object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500' src={assets.hero_product_img1} alt="Machines" />
                    </div>
                    <div className='flex-1 relative flex items-center justify-between w-full bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 shadow-sm border border-white/60 overflow-hidden group hover:shadow-md transition-all'>
                        <div className='relative z-10'>
                            <p className='text-xs uppercase tracking-wider text-amber-600 font-bold mb-2'>New Arrivals</p>
                            <p className='text-3xl font-bold text-slate-800 max-w-40 leading-tight mb-4'>Colorful <br/>Fabrics</p>
                            <button className='flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors'>Shop Now <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={16} /></button>
                        </div>
                        <Image className='absolute -right-4 top-1/2 -translate-y-1/2 w-44 object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500' src={assets.hero_product_img2} alt="Fabrics" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero