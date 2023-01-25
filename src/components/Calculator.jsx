import { useEffect, useState, useRef } from 'react';

import useInput from '../hooks/useInput';
import { isFirstRender } from '../helpers/index';
import { percentages } from '../data/Percentages';
import DollarSign from '../assets/images/icon-dollar.svg';
import personIcon from '../assets/images/icon-person.svg';
import Modal from './Modal';
import Button from './Button';

const Calculator = () => {
  const [bill, setBill, BillField] = useInput('Bill', DollarSign);
  const [numberPeople, setNumberPeople, NumberPeopleField] = useInput(
    'Number of People',
    personIcon
  );
  const [tipAmount, setTipAmount] = useState(0);
  const [customActive, setCustomActive] = useState(false);
  const [tipPerPerson, setTipPerPerson] = useState((0).toFixed(2));
  const [totalPerPerson, setTotalPerPerson] = useState((0).toFixed(2));
  const [error, setError] = useState(false);

  const tipCalculation = () =>
    Number(((bill * tipAmount * 0.01) / numberPeople).toFixed(2));

  const totalCalculation = () => {
    const netTotal = bill / numberPeople;
    return (netTotal + tipCalculation()).toFixed(2);
  };

  const isFirstTime = isFirstRender();

  useEffect(() => {
    if (!isFirstTime && numberPeople > 0) {
      setTipPerPerson(() => tipCalculation());
      setTotalPerPerson(() => totalCalculation());
      setError(false);
      return;
    }

    if (!isFirstTime && numberPeople == 0) {
      setError(true);
    }
  }, [numberPeople, tipAmount, bill]);

  const handleReset = () => {
    setBill(0);
    setTipAmount(0);
    setNumberPeople(0);
    setError(false);
  };

  return (
    <div className="lg:grid lg:grid-cols-2 gap-10">
      <div className="space-y-5">
        <div>{BillField()}</div>
        <div className="relative">
          <label className="text-neutralDarkGrayishCyan">Select Tip %</label>
          <div className="grid grid-cols-2 gap-5 mt-4 lg:grid-cols-3 lg:items-center">
            {percentages.map((item, i) => {
              return (
                <Button
                  key={i}
                  item={item}
                  setTipAmount={setTipAmount}
                  setCustomActive={setCustomActive}
                />
              );
            })}
          </div>
          <Modal
            setCustomActive={setCustomActive}
            setTipAmount={setTipAmount}
            customActive={customActive}
          />
        </div>
        <div className="">
          {error && (
            <p className="bg-red-700 text-center text-white mb-2">
              It can't be zero
            </p>
          )}
          {NumberPeopleField()}{' '}
        </div>
      </div>
      <div className="bg-primaryDarkGreen rounded-xl p-5 mt-5 lg:flex lg:flex-col">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-lg">Tip Amount</p>
            <p className="text-neutralGraishCyan">/ person</p>
          </div>
          <div>
            <p className="text-3xl text-primaryStrongCyan">${tipPerPerson}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-white text-lg">Total</p>
            <p className="text-neutralGraishCyan">/ person</p>
          </div>
          <div>
            <p className="text-3xl text-primaryStrongCyan">${totalPerPerson}</p>
          </div>
        </div>
        <button
          type="button"
          className="uppercase w-full bg-primaryStrongCyan py-2 mt-4 rounded-lg text-primaryDarkGreen text-xl hover:cursor-pointer  hover:bg-neutralLightGrayishCyan lg:mt-auto"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
