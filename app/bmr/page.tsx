"use client"
import React, { useState } from "react";
import Images from "next/image";
import bmr from "./../images/bmr.png";
import BackButton from "./../component/back";


const Page = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("male");
    const [result, setResult] = useState("0.00 kcal/วัน");

    const calculateBMR = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (isNaN(w) || isNaN(h)) {
            alert("กรุณาใส่น้ำหนักและส่วนสูงให้ถูกต้อง");
            return;
        }

        // สมการ BMR (ใช้สูตร Mifflin-St Jeor แบบง่าย)
        let bmr = 0;
        if (gender === "male") {
            bmr = 66 + 13.7 * w + 5 * h - 6.8 * 25; // 25 = อายุสมมติ
        } else {
            bmr = 655 + 9.6 * w + 1.8 * h - 4.7 * 25;
        }

        setResult(`${bmr.toFixed(2)} kcal/วัน`);
    };

    const clearFields = () => {
        setWeight("");
        setHeight("");
        setGender("male");
        setResult("0.00 kcal/วัน");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="absolute top-4 left-4">
                <BackButton label="🔙 กลับ" />
            </div>
            <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-2xl border-2 border-gray-200 transform transition-transform duration-500 hover:scale-105">
                {/* Title and Icon */}
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="bg-teal-500 p-3 rounded-full shadow-lg">
                        <Images src={bmr} alt="BMR Icon" className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 text-center mt-4">
                        BMR Calculator
                    </h1>
                    <p className="text-lg text-gray-600 text-center">
                        คำนวณอัตราการเผาผลาญพลังงาน
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Weight Input */}
                    <div>
                        <label
                            htmlFor="weight"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ป้อนน้ำหนัก
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-18 py-2 focus:border-teal-500 focus:ring-teal-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">กิโลกรัม</span>
                            </div>
                        </div>
                    </div>

                    {/* Height Input */}
                    <div>
                        <label
                            htmlFor="height"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ป้อนส่วนสูง
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="0"
                                className="block w-full rounded-md border-gray-300 pl-4 pr-18 py-2 focus:border-teal-500 focus:ring-teal-500 placeholder-gray-400 sm:text-sm transition duration-300"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">เซนติเมตร</span>
                            </div>
                        </div>
                    </div>

                    {/* Gender Radio Buttons */}
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-2">
                            เพศ:
                        </span>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <input
                                    id="male"
                                    name="gender"
                                    type="radio"
                                    checked={gender === "male"}
                                    onChange={() => setGender("male")}
                                    className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                                />
                                <label
                                    htmlFor="male"
                                    className="ml-2 block text-sm font-medium text-gray-700"
                                >
                                    ชาย
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="female"
                                    name="gender"
                                    type="radio"
                                    checked={gender === "female"}
                                    onChange={() => setGender("female")}
                                    className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                                />
                                <label
                                    htmlFor="female"
                                    className="ml-2 block text-sm font-medium text-gray-700"
                                >
                                    หญิง
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col space-y-3 pt-4">
                        <button
                            onClick={calculateBMR}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors duration-300 transform hover:scale-105"
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
                </div>

                {/* Result Display */}
                <div className="mt-6 bg-teal-50 p-4 rounded-xl text-center shadow-inner">
                    <p className="text-lg font-semibold text-teal-700">
                        อัตราการเผาผลาญ (BMR)
                    </p>
                    <p className="text-3xl font-bold text-teal-900 mt-1">{result}</p>
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
