'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StoreIcon } from 'lucide-react'

const VendorLogin = () => {
    const [isLogin, setIsLogin] = useState(true)
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate auth
        router.push('/store')
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-16 px-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-br from-amber-500 to-amber-400 p-8 text-center text-white">
                    <StoreIcon size={48} className="mx-auto mb-4 text-amber-50" />
                    <h2 className="text-3xl font-bold tracking-tight">Vendor Portal</h2>
                    <p className="text-amber-50 mt-2 text-sm">{isLogin ? 'Access your store dashboard' : 'Join as a new vendor'}</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Store Name</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="My Sewing Shop" />
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input required type="email" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="vendor@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <input required type="password" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="••••••••" />
                        </div>

                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all mt-6">
                            {isLogin ? 'Sign In' : 'Create Store Account'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        {isLogin ? "Want to sell with us? " : "Already a vendor? "}
                        <button onClick={() => setIsLogin(!isLogin)} className="text-amber-600 font-semibold hover:underline">
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorLogin
