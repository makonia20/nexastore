'use client'
import { dummyStoreDashboardData } from "@/assets/assets"
import Loading from "@/components/Loading"
import { CircleDollarSignIcon, ShoppingBasketIcon, StarIcon, TagsIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

export default function Dashboard() {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState({
        totalProducts: 0,
        totalEarnings: 0,
        totalOrders: 0,
        ratings: [],
    })

    // Mock data for charts
    const salesData = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 5000 },
        { name: 'Apr', sales: 4500 },
        { name: 'May', sales: 6000 },
        { name: 'Jun', sales: 5500 },
    ];

    const categoryData = [
        { name: 'Fabrics', orders: 120 },
        { name: 'Machines', orders: 45 },
        { name: 'Threads', orders: 85 },
        { name: 'Patterns', orders: 30 },
        { name: 'Tools', orders: 60 },
    ];

    const dashboardCardsData = [
        { title: 'Total Products', value: dashboardData.totalProducts, icon: ShoppingBasketIcon, bg: 'bg-gradient-to-br from-teal-500 to-teal-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Earnings', value: currency + dashboardData.totalEarnings, icon: CircleDollarSignIcon, bg: 'bg-gradient-to-br from-rose-500 to-rose-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Orders', value: dashboardData.totalOrders, icon: TagsIcon, bg: 'bg-gradient-to-br from-amber-500 to-amber-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Ratings', value: dashboardData.ratings.length, icon: StarIcon, bg: 'bg-gradient-to-br from-blue-500 to-blue-400', text: 'text-white', iconBg: 'bg-white/20' },
    ]

    const fetchDashboardData = async () => {
        setDashboardData(dummyStoreDashboardData)
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    if (loading) return <Loading />

    return (
        <div className=" text-slate-500 mb-28">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Vendor <span className="text-teal-600">Overview</span></h1>
            <p className="mt-1 text-sm text-slate-500">Track your products, sales, and community feedback.</p>

            {/* Redesigned Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                {
                    dashboardCardsData.map((card, index) => (
                        <div key={index} className={`flex items-center gap-5 shadow-sm border-0 p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 ${card.bg} ${card.text}`}>
                            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${card.iconBg}`}>
                                <card.icon size={26} className="text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-medium opacity-90">{card.title}</p>
                                <b className="text-3xl font-bold">{card.value}</b>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
                <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-2xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Monthly Revenue</h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Line type="monotone" dataKey="sales" stroke="#0d9488" strokeWidth={3} dot={{ r: 4, fill: '#0d9488' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-2xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Orders by Category</h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="orders" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-4">Recent Reviews</h2>

            <div className="bg-white shadow-sm border border-slate-100 rounded-2xl overflow-hidden">
                {
                    dashboardData.ratings.map((review, index) => (
                        <div key={index} className="flex max-sm:flex-col gap-5 sm:items-center justify-between p-6 border-b border-slate-100 text-sm text-slate-600 last:border-b-0 hover:bg-slate-50 transition-colors">
                            <div>
                                <div className="flex gap-4 items-center">
                                    <Image src={review.user.image} alt="" className="w-12 aspect-square rounded-full shadow-sm" width={100} height={100} />
                                    <div>
                                        <p className="font-semibold text-slate-800">{review.user.name}</p>
                                        <p className="font-light text-xs text-slate-400">{new Date(review.createdAt).toDateString()}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-600 max-w-md leading-relaxed italic">"{review.review}"</p>
                            </div>
                            <div className="flex flex-col justify-between gap-4 sm:items-end">
                                <div className="flex flex-col sm:items-end bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">{review.product?.category}</p>
                                    <p className="font-semibold text-slate-700 mb-2">{review.product?.name}</p>
                                    <div className='flex items-center'>
                                        {Array(5).fill('').map((_, index) => (
                                            <StarIcon key={index} size={15} className='text-transparent mt-0.5' fill={review.rating >= index + 1 ? "#0d9488" : "#e2e8f0"} />
                                        ))}
                                    </div>
                                </div>
                                <button onClick={() => router.push(`/product/${review.product.id}`)} className="text-teal-600 font-semibold text-sm hover:text-teal-700 hover:underline">View Product &rarr;</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}