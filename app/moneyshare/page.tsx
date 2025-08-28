"use client"
import React, { useState } from 'react'
import moneyshare from './../images/moneyshare.png'
import Images from 'next/image'
import BackButton from "./../component/back";
const Page = () => {
    const [amount, setAmount] = useState("")
    const [people, setPeople] = useState("")
    const [result, setResult] = useState("0.00 บาท")

    const calculateShare = () => {
        const amt = parseFloat(amount)
        const ppl = parseInt(people)

        if (isNaN(amt) || isNaN(ppl) || ppl <= 0) {
            alert("กรุณาใส่จำนวนเงินและจำนวนคนให้ถูกต้อง")
            return
        }

        const share = amt / ppl
        setResult(`${share.toFixed(2)} บาท`)
    }

    const clearFields = () => {
        setAmount("")
        setPeople("")
        setResult("0.00 บาท")
    }

    return (

        <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="absolute top-4 left-4">
                <BackButton label="🔙 กลับ" />
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full transition-all duration-300 transform hover:scale-105">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-green-600">Money Share Calculator</h1>
                    <p className="text-gray-500 mt-2">คำนวณเงินที่ต้องหารกัน</p>
                </div>

                {/* Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <Images
                        src={moneyshare}
                        alt="Money Share"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Input fields */}
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        ป้อนจำนวนเงิน
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="ใส่จำนวนเงิน"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="people" className="block text-sm font-medium text-gray-700">
                        ป้อนจำนวนคน
                    </label>
                    <input
                        type="number"
                        id="people"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="ใส่จำนวนคน"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-4 mb-6">
                    <button
                        onClick={calculateShare}
                        className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 active:scale-95"
                    >
                        คำนวณ
                    </button>
                    <button
                        onClick={clearFields}
                        className="w-full bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-400 transition-transform transform hover:-translate-y-1 active:scale-95"
                    >
                        ล้างข้อมูล
                    </button>
                </div>

                {/* Result display */}
                <div className="text-center">
                    <p className="text-lg text-gray-600">หารคนละ</p>
                    <p className="text-4xl font-extrabold text-green-600 mt-1">{result}</p>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-gray-400">
                    <p>Dev by DomeDome SAU Team</p>
                </div>
            </div>
        </div>
    )
}

export default Page
