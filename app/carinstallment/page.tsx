"use client";
import React, { useState } from "react";
import Images from "next/image";
import carinstallment from "./../images/carinstallment.png";
import BackButton from "./../component/back";

const Page = () => {
    const [name, setName] = useState("");
    const [carPrice, setCarPrice] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [downPayment, setDownPayment] = useState(15); // ค่าเริ่มต้น 15%
    const [months, setMonths] = useState(12); // ค่าเริ่มต้น 12 เดือน
    const [result, setResult] = useState("0.00");

    const calculateInstallment = () => {
        const price = parseFloat(carPrice);
        const rate = parseFloat(interestRate) / 100;    
        const m = months;

        if (isNaN(price) || isNaN(rate) || isNaN(m) || m <= 0) {
            alert("กรุณาใส่ข้อมูลให้ถูกต้อง");
            return;
        }   

        // เงินดาวน์
        const downPaymentAmount = (price * downPayment) / 100;
        const loanAmount = price - downPaymentAmount;

        // ดอกเบี้ยแบบ simple interest (ไม่ใช่ reducing balance)
        const totalInterest = loanAmount * rate * (m / 12);
        const totalPayment = loanAmount + totalInterest;
        const monthlyInstallment = totalPayment / m;

        setResult(monthlyInstallment.toFixed(2));
    };

    const clearFields = () => {
        setName("");
        setCarPrice("");
        setInterestRate("");
        setDownPayment(15);
        setMonths(12);
        setResult("0.00");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="absolute top-4 left-4">
                <BackButton label="🔙 กลับ" />
            </div>
            <div className="w-full max-w-lg p-6 bg-white rounded-3xl shadow-2xl border-2 border-gray-200 transform transition-transform duration-500 hover:scale-105">
                {/* Title and Icon */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="bg-violet-500 p-3 rounded-full shadow-lg">
                        <Images src={carinstallment} alt="Car Installment" className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 text-center mt-4">
                        Car Installment Calculator
                    </h1>
                    <p className="text-lg text-gray-600 text-center">
                        คำนวณเงินผ่อนรถยนต์
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ชื่อผู้คำนวณ
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="ชื่อของคุณ"
                                className="block w-full rounded-md border-gray-300 pl-4 py-2 focus:border-violet-500 focus:ring-violet-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                        </div>
                    </div>

                    {/* Car Price Input */}
                    <div>
                        <label
                            htmlFor="carPrice"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ราคารถ
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="carPrice"
                                value={carPrice}
                                onChange={(e) => setCarPrice(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-2 focus:border-violet-500 focus:ring-violet-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">บาท</span>
                            </div>
                        </div>
                    </div>

                    {/* Interest Rate Input */}
                    <div>
                        <label
                            htmlFor="interestRate"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ดอกเบี้ยต่อปี
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="interestRate"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-12 py-2 focus:border-violet-500 focus:ring-violet-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                        </div>
                    </div>

                    {/* Down Payment Radio Buttons */}
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-2">
                            เงินดาวน์ (%)
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {[15, 20, 25, 30, 35].map((val) => (
                                <label key={val} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="downPayment"
                                        value={val}
                                        checked={downPayment === val}
                                        onChange={() => setDownPayment(val)}
                                        className="h-4 w-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">{val}%</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Installment Months Dropdown */}
                    <div>
                        <label
                            htmlFor="installmentMonths"
                            className="block text-sm font-medium text-gray-700"
                        >
                            จำนวนเดือนที่ผ่อน
                        </label>
                        <select
                            id="installmentMonths"
                            value={months}
                            onChange={(e) => setMonths(parseInt(e.target.value))}
                            className="mt-1 block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md shadow-sm transition duration-300"
                        >
                            {Array.from({ length: 24 }, (_, i) => i + 1).map((m) => (
                                <option key={m} value={m}>
                                    {m} เดือน
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-3 pt-4">
                    <button
                        onClick={calculateInstallment}
                        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors duration-300 transform hover:scale-105"
                    >
                        คำนวณ
                    </button>
                    <button
                        onClick={clearFields}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl shadow-md transition-colors duration-300 transform hover:scale-105"
                    >
                        ล้างข้อมูล
                    </button>
                </div>

                {/* Result Display */}
                <div className="mt-6 bg-violet-50 p-4 rounded-xl text-center shadow-inner">
                    <p className="text-lg font-semibold text-violet-700">
                        ยอดผ่อนต่อเดือน
                    </p>
                    <p className="text-3xl font-bold text-violet-900 mt-1">
                        {result} บาท
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-400 text-xs">
                    Dev by DomeDome SAU Team
                </div>
            </div>
        </div>
    );
};

export default Page;
