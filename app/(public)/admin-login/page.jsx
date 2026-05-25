'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShieldCheckIcon } from 'lucide-react'

const AdminLogin = () => {
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate auth
        router.push('/admin')
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-16 px-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 text-center text-white">
                    <ShieldCheckIcon size={48} className="mx-auto mb-4 text-teal-400" />
                    <h2 className="text-3xl font-bold tracking-tight">Admin Portal</h2>
                    <p className="text-slate-300 mt-2 text-sm">Sign in to manage NexaStore</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <input required type="email" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="admin@nexastore.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <input required type="password" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="••••••••" />
                        </div>

                        <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all mt-6">
                            Sign In as Admin
                        </button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default AdminLogin
