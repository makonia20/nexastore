'use client'
import { dummyAdminDashboardData } from "@/assets/assets"
import Loading from "@/components/Loading"
import OrdersAreaChart from "@/components/OrdersAreaChart"
import { CircleDollarSignIcon, ShoppingBasketIcon, StoreIcon, TagsIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState({
        products: 0,
        revenue: 0,
        orders: 0,
        stores: 0,
        allOrders: [],
    })

    // Mock data for new charts
    const revenueData = [
        { name: 'Jan', revenue: 12000 },
        { name: 'Feb', revenue: 15000 },
        { name: 'Mar', revenue: 18000 },
        { name: 'Apr', revenue: 16000 },
        { name: 'May', revenue: 22000 },
        { name: 'Jun', revenue: 25000 },
    ];

    const storeGrowthData = [
        { name: 'Jan', stores: 10 },
        { name: 'Feb', stores: 15 },
        { name: 'Mar', stores: 22 },
        { name: 'Apr', stores: 28 },
        { name: 'May', stores: 35 },
        { name: 'Jun', stores: 42 },
    ];

    const dashboardCardsData = [
        { title: 'Total Revenue', value: currency + dashboardData.revenue.toLocaleString(), icon: CircleDollarSignIcon, bg: 'bg-gradient-to-br from-teal-500 to-teal-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Orders', value: dashboardData.orders.toLocaleString(), icon: TagsIcon, bg: 'bg-gradient-to-br from-rose-500 to-rose-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Products', value: dashboardData.products.toLocaleString(), icon: ShoppingBasketIcon, bg: 'bg-gradient-to-br from-blue-500 to-blue-400', text: 'text-white', iconBg: 'bg-white/20' },
        { title: 'Total Stores', value: dashboardData.stores.toLocaleString(), icon: StoreIcon, bg: 'bg-gradient-to-br from-amber-500 to-amber-400', text: 'text-white', iconBg: 'bg-white/20' },
    ]

    const fetchDashboardData = async () => {
        setDashboardData(dummyAdminDashboardData)
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    if (loading) return <Loading />

    return (
        <div className="text-slate-500 mb-28">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Admin <span className="text-teal-600">Overview</span></h1>
            <p className="mt-1 text-sm text-slate-500">Monitor platform growth, sales, and vendor metrics.</p>

            {/* Redesigned Metric Cards */}
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
                {/* Revenue Line Chart */}
                <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-2xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Platform Revenue (YTD)</h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Line type="monotone" dataKey="revenue" stroke="#0d9488" strokeWidth={3} dot={{ r: 4, fill: '#0d9488' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Store Growth Area Chart */}
                <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-2xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Vendor Growth</h2>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={storeGrowthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <defs>
                                    <linearGradient id="colorStores" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Area type="monotone" dataKey="stores" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorStores)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Original Orders Area Chart Box */}
            <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-2xl mb-10">
                 <h2 className="text-lg font-bold text-slate-800 mb-6">Recent Order Activity</h2>
                 <OrdersAreaChart allOrders={dashboardData.allOrders} />
            </div>

        </div>
    )
}