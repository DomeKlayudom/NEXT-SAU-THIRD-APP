import calculator from './images/calculator.png'  
import moneyshare from './images/moneyshare.png'
import bmr from './images/bmr.png'
import bmi from './images/bmi.png'
import carinstallment from './images/carinstallment.png'
import Images from 'next/image'
export default function Home() {
  return (
<div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center text-gray-800">

    {/* <!-- Hero Section --> */}
    <div className="text-center py-16 px-4 max-w-4xl mx-auto">
        {/* <!-- Logo --> */}
        <div className="mb-6 animate-bounce">
            <Images src={calculator} alt="Calculator Logo" className="w-24 h-24 mx-auto" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Calculator Variety</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 font-medium">เครื่องคำนวณ By DTI-SAU</p>
    </div>

    {/* <!-- Cards Section --> */}
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* <!-- Card 1: Money Share --> */}
            <div className="card bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <Images src={moneyshare} alt="Money Share Icon" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">คำนวณแบ่งเงิน</h2>
                    <p className="text-gray-600 mb-4">แบ่งปันค่าใช้จ่ายกับเพื่อนๆ ได้อย่างยุติธรรม</p>
                    <a href="./moneyshare" className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
                        ไปที่หน้าคำนวณ
                    </a>
                </div>
            </div>

            {/* <!-- Card 2: BMI --> */}
            <div className="card bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <Images src={bmi} alt="BMI Icon" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">คำนวณ BMI</h2>
                    <p className="text-gray-600 mb-4">ประเมินสุขภาพของคุณด้วยดัชนีมวลกาย</p>
                    <a href="./bmi" className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-300">
                        ไปที่หน้าคำนวณ
                    </a>
                </div>
            </div>
            
            {/* <!-- Card 3: BMR --> */}
            <div className="card bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <Images src={bmr} alt="BMR Icon" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">คำนวณ BMR</h2>
                    <p className="text-gray-600 mb-4">คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน</p>
                    <a href="./bmr" className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300">
                        ไปที่หน้าคำนวณ
                    </a>
                </div>
            </div>

            {/* <!-- Card 4: Car Installment --> */}
            <div className="card bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <Images src={carinstallment} alt="Car Installment Icon" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">คำนวณผ่อนรถ</h2>
                    <p className="text-gray-600 mb-4">วางแผนการเงินสำหรับการซื้อรถในฝัน</p>
                    <a href="./carinstallment" className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300">
                        ไปที่หน้าคำนวณ
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer className="mt-auto py-8 text-center text-gray-600 text-sm">
        <p>&copy; 2025 DTI-SAU. All rights reserved.</p>
    </footer>

</div>
  );
}

