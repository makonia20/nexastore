'use client'
import Link from "next/link"

const StoreNavbar = () => {


    return (
        <div className="flex items-center justify-between px-12 py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all sticky top-0 z-50 shadow-sm">
            <Link href="/" className="relative text-4xl font-semibold text-slate-800 tracking-tight">
                <span className="text-teal-600">Nexa</span>Store<span className="text-teal-600 text-5xl leading-0">.</span>
                <p className="absolute text-[10px] uppercase tracking-wider font-bold -top-1 -right-14 px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r from-amber-500 to-amber-400 shadow-sm">
                    Vendor
                </p>
            </Link>
            <div className="flex items-center gap-4">
                <Link href="/" className="text-sm font-medium text-teal-600 hover:text-teal-700 bg-teal-50 px-4 py-2 rounded-full transition-colors hidden sm:block">
                    View Storefront
                </Link>
                <Link href="/vendor-login" className="text-sm font-medium text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors">
                    Logout
                </Link>
                <p className="font-medium text-slate-700 ml-2 hidden md:block">Hi, Vendor</p>
            </div>
        </div>
    )
}

export default StoreNavbar