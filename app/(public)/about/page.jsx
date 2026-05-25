import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

export const metadata = {
    title: 'About Us | NexaStore',
    description: 'Learn more about NexaStore, your premium destination for everything you need.',
}

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
                        Crafting the Future of <span className="text-teal-600">Sewing.</span>
                    </h1>
                    <p className="text-lg text-slate-600">
                        At NexaStore, we believe shopping should be a unified and seamless experience. We're dedicated to providing everyone with the highest quality products across all categories.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
                        <Image src={assets.hero_model_img} alt="Sewing studio" className="object-cover w-full h-full rounded-2xl" />
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-slate-800">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our journey began with a simple idea: making premium sewing supplies accessible to everyone. We noticed that finding high-quality, specialized crafting materials often meant visiting multiple stores or waiting weeks for shipping. 
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Today, NexaStore operates as a central hub where vendors and buyers meet. Whether you need the latest tech, trendy apparel, or home essentials, we ensure fast, local delivery right to your doorstep.
                        </p>
                        
                        <div className="flex gap-4 pt-4">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
                                <h3 className="text-teal-600 font-bold text-2xl mb-1">50k+</h3>
                                <p className="text-sm text-slate-500 font-medium">Active Creators</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
                                <h3 className="text-teal-600 font-bold text-2xl mb-1">10k+</h3>
                                <p className="text-sm text-slate-500 font-medium">Premium Products</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-teal-600 rounded-3xl p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-10">Why Choose NexaStore?</h2>
                    <div className="grid sm:grid-cols-3 gap-8">
                        <div>
                            <div className="bg-teal-500/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Curated Quality</h3>
                            <p className="text-teal-50 text-sm">Every fabric and tool is vetted for premium quality.</p>
                        </div>
                        <div>
                            <div className="bg-teal-500/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast Local Delivery</h3>
                            <p className="text-teal-50 text-sm">Get your supplies in hours, not weeks, using our local dispatchers.</p>
                        </div>
                        <div>
                            <div className="bg-teal-500/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Community First</h3>
                            <p className="text-teal-50 text-sm">Join a thriving network of passionate sewing enthusiasts.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutPage
