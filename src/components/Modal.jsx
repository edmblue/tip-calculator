import { useState } from 'react';

const Modal = ({ customActive, setCustomActive, setTipAmount }) => {
  const [customValue, setCustomValue] = useState(0);
  const handleCustom = (e) => {
    if (e.target.classList.contains('customValue')) {
      setTipAmount(Number(customValue));
    }

    setCustomActive(false);
    setCustomValue(0);
  };
  return (
    <div
      className={`bg-primaryStrongCyan h-full w-full absolute top-0 opacity-95 ${
        customActive ? 'flex justify-center items-center' : 'hidden'
      }`}
    >
      <div>
        <label className="text-white text-center">Enter custom amount</label>
        <input
          type="number"
          name="customValue"
          className="block text-right outline-none pr-3"
          onChange={(e) => setCustomValue(e.target.value)}
          value={customValue}
        />
        <button
          onClick={handleCustom}
          className="w-full bg-neutralVeryDarkCyan mt-2 hover:bg-primaryDarkGreen text-white py-1 uppercase customValue"
        >
          Submit
        </button>
      </div>
      <div onClick={handleCustom} className=" mt-2 absolute top-0 right-2">
        <p className="text-2xl text-white rounded  hover:bg-primaryDarkGreen leading-relaxed px-4 py-1 hover:cursor-pointer">
          x
        </p>
      </div>
    </div>
  );
};

export default Modal;
