import { useState } from "react";

const DBmiScreen = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = Number(height) / 100;
    const bmiValue = (Number(weight) / (h * h)).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setResult("น้ำหนักน้อย");
    } else if (bmiValue < 25) {
      setResult("น้ำหนักปกติ");
    } else if (bmiValue < 30) {
      setResult("น้ำหนักเกิน");
    } else {
      setResult("โรคอ้วน");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] flex justify-center items-center p-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-black text-center text-[#5c8254] mb-2">
          BMI Calculator
        </h1>

        <p className="text-center text-gray-500 mb-8">คำนวณดัชนีมวลกายของคุณ</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">น้ำหนัก (kg)</label>

            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5c8254]"
              placeholder="เช่น 70"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">ส่วนสูง (cm)</label>

            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5c8254]"
              placeholder="เช่น 175"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-[#5c8254] hover:bg-[#4a6b43] text-white py-3 rounded-xl font-bold"
          >
            คำนวณ BMI
          </button>
        </div>

        {bmi && (
          <div className="mt-8 bg-[#e5f0e1] rounded-2xl p-5 text-center">
            <p className="text-sm text-gray-500 mb-2">BMI ของคุณ</p>

            <h2 className="text-5xl font-black text-[#5c8254]">{bmi}</h2>

            <p className="mt-3 font-bold text-gray-700">{result}</p>

            <div className="mt-4 text-sm text-gray-600">
              {result === "น้ำหนักน้อย" && "ควรเพิ่มพลังงานและโปรตีนให้เพียงพอ"}

              {result === "น้ำหนักปกติ" && "รักษาสมดุลอาหารและการออกกำลังกาย"}

              {result === "น้ำหนักเกิน" &&
                "ควรควบคุมพลังงานและเพิ่มการออกกำลังกาย"}

              {result === "โรคอ้วน" &&
                "ควรลดพลังงานจากอาหารและออกกำลังกายสม่ำเสมอ"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DBmiScreen;
