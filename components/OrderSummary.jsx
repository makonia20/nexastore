import { PlusIcon, SquarePenIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import AddressModal from './AddressModal';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const OrderSummary = ({ totalPrice, items }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

    const router = useRouter();

    const addressList = useSelector(state => state.address.list);

    const [paymentMethod, setPaymentMethod] = useState('Cash ZWG');
    const [deliveryMethod, setDeliveryMethod] = useState('Biker');
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [couponCodeInput, setCouponCodeInput] = useState('');
    const [coupon, setCoupon] = useState('');

    const handleCouponCode = async (event) => {
        event.preventDefault();
        
    }

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        router.push('/orders')
    }

    return (
        <div className='w-full max-w-lg lg:max-w-[340px] bg-white border border-slate-100 shadow-2xl shadow-slate-200/40 text-slate-600 text-sm rounded-3xl p-7 relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400"></div>
            <h2 className='text-2xl font-bold text-slate-800 tracking-tight'>Payment Summary</h2>
            
            <p className='text-slate-400 text-xs mt-6 mb-2 font-semibold uppercase tracking-wider'>Payment Method</p>
            <div className='flex gap-2 items-center'>
                <select 
                    className='border border-slate-200 bg-slate-50/50 p-2.5 w-full outline-none rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all text-slate-700 font-medium cursor-pointer' 
                    value={paymentMethod} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="Cash ZWG">Cash ZWG</option>
                    <option value="Cash USD">Cash USD</option>
                    <option value="Ecocash USD">Ecocash USD</option>
                    <option value="Ecocash ZWG">Ecocash ZWG</option>
                    <option value="Inbucks">Inbucks</option>
                </select>
            </div>
            <p className='text-slate-400 text-xs mt-5 mb-2 font-semibold uppercase tracking-wider'>Delivery Method</p>
            <div className='flex gap-2 items-center'>
                <select 
                    className='border border-slate-200 bg-slate-50/50 p-2.5 w-full outline-none rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:bg-white transition-all text-slate-700 font-medium cursor-pointer' 
                    value={deliveryMethod} 
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                >
                    <option value="Biker">Biker</option>
                    <option value="InDrive">InDrive</option>
                    <option value="Rider">Rider</option>
                    <option value="Taxi">Taxi</option>
                </select>
            </div>
            <div className='my-4 py-4 border-y border-slate-200 text-slate-400'>
                <p>Address</p>
                {
                    selectedAddress ? (
                        <div className='flex gap-2 items-center'>
                            <p>{selectedAddress.name}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}</p>
                            <SquarePenIcon onClick={() => setSelectedAddress(null)} className='cursor-pointer' size={18} />
                        </div>
                    ) : (
                        <div>
                            {
                                addressList.length > 0 && (
                                    <select className='border border-slate-400 p-2 w-full my-3 outline-none rounded' onChange={(e) => setSelectedAddress(addressList[e.target.value])} >
                                        <option value="">Select Address</option>
                                        {
                                            addressList.map((address, index) => (
                                                <option key={index} value={index}>{address.name}, {address.city}, {address.state}, {address.zip}</option>
                                            ))
                                        }
                                    </select>
                                )
                            }
                            <button className='flex items-center gap-1 text-slate-600 mt-1' onClick={() => setShowAddressModal(true)} >Add Address <PlusIcon size={18} /></button>
                        </div>
                    )
                }
            </div>
            <div className='pb-4 border-b border-slate-200'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1 text-slate-400'>
                        <p>Subtotal:</p>
                        <p>Delivery:</p>
                        {coupon && <p>Coupon:</p>}
                    </div>
                    <div className='flex flex-col gap-1 font-medium text-right'>
                        <p>{currency}{totalPrice.toLocaleString()}</p>
                        <p>Free</p>
                        {coupon && <p>{`-${currency}${(coupon.discount / 100 * totalPrice).toFixed(2)}`}</p>}
                    </div>
                </div>
                {
                    !coupon ? (
                        <form onSubmit={e => toast.promise(handleCouponCode(e), { loading: 'Checking Coupon...' })} className='flex justify-center gap-3 mt-3'>
                            <input onChange={(e) => setCouponCodeInput(e.target.value)} value={couponCodeInput} type="text" placeholder='Coupon Code' className='border border-slate-400 p-1.5 rounded w-full outline-none' />
                            <button className='bg-slate-600 text-white px-3 rounded hover:bg-slate-800 active:scale-95 transition-all'>Apply</button>
                        </form>
                    ) : (
                        <div className='w-full flex items-center justify-center gap-2 text-xs mt-2'>
                            <p>Code: <span className='font-semibold ml-1'>{coupon.code.toUpperCase()}</span></p>
                            <p>{coupon.description}</p>
                            <XIcon size={18} onClick={() => setCoupon('')} className='hover:text-red-700 transition cursor-pointer' />
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between py-5 text-lg'>
                <p className='font-medium text-slate-600'>Total:</p>
                <p className='font-bold text-teal-600 text-right'>{currency}{coupon ? (totalPrice - (coupon.discount / 100 * totalPrice)).toFixed(2) : totalPrice.toLocaleString()}</p>
            </div>
            <button 
                onClick={e => toast.promise(handlePlaceOrder(e), { loading: 'placing Order...' })} 
                className='w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3.5 rounded-xl font-bold tracking-wide shadow-lg shadow-teal-500/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 active:shadow-md transition-all'
            >
                Place Order
            </button>

            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal} />}

        </div>
    )
}

export default OrderSummary