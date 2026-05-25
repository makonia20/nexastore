'use client'
import React, { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'
import toast from 'react-hot-toast'

const ContactPage = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate network request
        setTimeout(() => {
            setLoading(false)
            toast.success("Message sent successfully! We'll be in touch soon.")
            e.target.reset()
        }, 1500)
    }

    return (
        <div className="min-h-[80vh] bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
                        Let's Get in <span className="text-teal-600">Touch.</span>
                    </h1>
                    <p className="text-lg text-slate-600">
                        Whether you have a question about our fabrics, need help with a sewing machine, or want to partner with us—we're here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Details</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        <PhoneIcon className="text-teal-600" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Call Us</p>
                                        <p className="text-slate-800 font-semibold">0771883091</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        <MailIcon className="text-teal-600" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Email Us</p>
                                        <p className="text-slate-800 font-semibold">makonia20@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                        <MapPinIcon className="text-teal-600" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Visit Us</p>
                                        <p className="text-slate-800 font-semibold">17362 Zimre Park Ext,<br />Ruwa, Harare</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all" placeholder="jane@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 rounded-xl px-4 py-3 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button disabled={loading} type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactPage
