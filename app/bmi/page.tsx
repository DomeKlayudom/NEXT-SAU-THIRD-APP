"use client";
import React, { useState } from "react";
import Image from "next/image";
import bmi from "./../images/bmi.png"; // รูป
import BackButton from "./../component/back";

const Page = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmiValue, setBmiValue] = useState("0.00"); // เปลี่ยนชื่อ state

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;

        if (isNaN(w) || isNaN(h) || h <= 0) {
            alert("กรุณาใส่น้ำหนักและส่วนสูงให้ถูกต้อง");
            return;
        }

        const bmiCalc = w / (h * h);
        setBmiValue(bmiCalc.toFixed(2));
    };

    const clearFields = () => {
        setWeight("");
        setHeight("");
        setBmiValue("0.00");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
    <div className="absolute top-4 left-4">
        <BackButton label="🔙 กลับ" />
    </div>
            <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-2xl border-2 border-gray-200 transform transition-transform duration-500 hover:scale-105">
                {/* Title and Icon */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <Image
                            src={bmi}  // รูป
                            alt="BMI Calculator"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 text-center mt-4">
                        BMI Calculator
                    </h1>
                    <p className="text-lg text-gray-600 text-center">คำนวณดัชนีมวลกาย</p>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    {/* Weight Input */}
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                            ป้อนน้ำหนัก
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-18 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">กิโลกรัม</span>
                            </div>
                        </div>
                    </div>

                    {/* Height Input */}
                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                            ป้อนส่วนสูง
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-18 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">เซนติเมตร</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-3 pt-4">
                    <button
                        onClick={calculateBMI}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors duration-300 transform hover:scale-105"
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

                {/* Result */}
                <div className="mt-6 bg-blue-50 p-4 rounded-xl text-center shadow-inner">
                    <p className="text-lg font-semibold text-blue-700">ค่า BMI</p>
                    <p className="text-3xl font-bold text-blue-900 mt-1">{bmiValue}</p>
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
