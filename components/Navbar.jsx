'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4  transition-all">

                    <Link href="/" className="relative text-4xl font-semibold text-slate-800 tracking-tight">
                        <span className="text-teal-600">Nexa</span>Store<span className="text-teal-600 text-5xl leading-0">.</span>
                        <p className="absolute text-[10px] uppercase tracking-wider font-bold -top-1 -right-16 px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r from-teal-500 to-teal-400 shadow-sm">
                            premium
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Shop", path: "/shop" },
                            { name: "About", path: "/about" },
                            { name: "Contact", path: "/contact" }
                        ].map((link) => (
                            <Link key={link.name} href={link.path} className={`relative group font-medium transition-colors ${pathname === link.path ? 'text-teal-600' : 'hover:text-teal-500'}`}>
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 transition-transform origin-left duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </Link>
                        ))}

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-teal-500/50 px-4 py-2.5 rounded-full transition-all duration-300 shadow-inner">
                            <Search size={18} className="text-slate-500" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-400 text-slate-700" type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            <ShoppingCart size={20} />
                            Cart
                            <button className="absolute -top-1.5 left-3 text-[10px] font-bold text-white bg-rose-500 w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-sm">{cartCount}</button>
                        </Link>

                        <div className="relative group">
                            <button className="px-8 py-2.5 bg-rose-500 hover:bg-rose-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-white rounded-full font-medium">
                                Portals
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                                <Link href="/admin-login" className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-medium">Admin Portal</Link>
                                <Link href="/vendor-login" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors font-medium">Vendor Portal</Link>
                            </div>
                        </div>

                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden relative group">
                        <button className="px-7 py-1.5 bg-rose-500 hover:bg-rose-600 text-sm transition text-white rounded-full">
                            Portals
                        </button>
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                            <Link href="/admin-login" className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-medium">Admin Portal</Link>
                            <Link href="/vendor-login" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors font-medium">Vendor Portal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar