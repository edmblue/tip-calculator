import { useState } from 'react';

const useInput = (label, sign) => {
  const [state, setState] = useState(0);
  const InputField = () => (
    <>
      <label className="text-neutralDarkGrayishCyan">{label}</label>
      <div className="relative">
        <input
          className="block bg-neutralVeryLightGrayishCyan text-primaryDarkGreen text-right w-full py-1 px-2 text-xl"
          type="number"
          placeholder="Enter the amount"
          value={state}
          onChange={(e) => {
            setState(Number(e.target.value));
          }}
        />
        <img
          src={sign}
          alt=""
          aria-hidden="true"
          className="absolute top-2.5 left-3"
        />
      </div>
    </>
  );
  return [state, setState, InputField];
};

export default useInput;
