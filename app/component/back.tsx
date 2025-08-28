"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  label?: string; // ถ้าไม่ส่งมาก็จะ default = "ย้อนกลับ"
}

const BackButton: React.FC<BackButtonProps> = ({ label = "ย้อนกลับ" }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl shadow-md transition-colors duration-300"
    >
      {label}
    </button>
  );
};

export default BackButton;
