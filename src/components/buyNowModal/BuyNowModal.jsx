/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full rounded-xl border border-transparent bg-pink-600 px-4 py-3 text-center text-gray-100 hover:border-pink-500 hover:bg-pink-100 hover:text-pink-700"
            >
                Buy now
            </button>
            <dialog
                ref={dialogRef}
                onClose={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) setOpen(false);
                }}
                aria-label="Enter delivery details"
                className="w-[calc(100%-2rem)] max-w-lg rounded-xl bg-pink-50 p-6 text-gray-900 shadow-xl backdrop:bg-black/50"
            >
                <div className="mb-3">
                    <label className="sr-only" htmlFor="checkout-name">Name</label>
                    <input
                        id="checkout-name"
                        type="text"
                        name="name"
                        value={addressInfo.name}
                        onChange={(e) => {
                            setAddressInfo({
                                ...addressInfo,
                                name: e.target.value
                            })
                        }}
                        placeholder="Enter your name"
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                    />
                </div>
                <div className="mb-3">
                    <label className="sr-only" htmlFor="checkout-address">Address</label>
                    <input
                        id="checkout-address"
                        type="text"
                        name="address"
                        value={addressInfo.address}
                        onChange={(e) => {
                            setAddressInfo({
                                ...addressInfo,
                                address: e.target.value
                            })
                        }}
                        placeholder='Enter your address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                    />
                </div>
                <div className="mb-3">
                    <label className="sr-only" htmlFor="checkout-pincode">Pincode</label>
                    <input
                        id="checkout-pincode"
                        type="number"
                        name="pincode"
                        value={addressInfo.pincode}
                        onChange={(e) => {
                            setAddressInfo({
                                ...addressInfo,
                                pincode: e.target.value
                            })
                        }}
                        placeholder='Enter your pincode'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 text-pink-600 placeholder-pink-300'
                    />
                </div>
                <div className="mb-3">
                    <label className="sr-only" htmlFor="checkout-mobile">Mobile number</label>
                    <input
                        id="checkout-mobile"
                        type="text"
                        name="mobileNumber"
                        value={addressInfo.mobileNumber}
                        onChange={(e) => {
                            setAddressInfo({
                                ...addressInfo,
                                mobileNumber: e.target.value
                            })
                        }}
                        placeholder='Enter your mobileNumber'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="w-full rounded-lg border border-pink-300 px-4 py-3 text-pink-700"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            buyNowFunction();
                        }}
                        className="w-full rounded-lg bg-pink-600 px-4 py-3 text-center text-gray-100"
                    >
                        Buy now
                    </button>
                </div>
            </dialog>
        </>
    );
}

export default BuyNowModal;
