import { useEffect } from "react";
import "./App.css";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeBill = (e) => {
    setBill(Number(e.target.value));
  };
  const onChangeTip = (e) => {
    setTip(Number(e.target.value));
  };
  const onChangePeople = (e) => {
    setPeople(Number(e.target.value));
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");

    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill && tip && people) {
      setTipAmount((bill * tip) / 100 / people);
      setTotal(bill / people + (bill * tip) / 100 / people);
    }
  }, [bill, tip, people]);

  return (
    <main className="w-full h-screen flex justify-center lg:items-center bg-dark-blue">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-[32.5rem] lg:mx-[1.3rem] mt-[3rem]  lg:mt-[1.3rem]  lg:mb-[4rem] lg:max-w-[58.0125rem]">
        <div className="w-full text-center text-[1.875rem] lg:text-[1.5625rem] tracking-[0.25em] text-dark-grayish-cyan">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>

        <div className="w-full lg:h-[29.875rem] h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-[2.375rem] bg-white text-center rounded-t-3xl lg:rounded-b-3xl gap-[3rem]">
          <div className="flex flex-col justify-between h-full row-span-2 lg:row-auto">
            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex justify-between w-full">
                <h2 className="text-dark-grayish-cyan">Bill</h2>
                <p className={`text-orange-600 ${bill === 0 ? "" : "hidden"}`}>
                  Can't be zero
                </p>
              </div>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[.9375rem] left-[.9375rem]">
                  <img src={dollar} alt="dollar icon" />
                </span>
                <input
                  type="number"
                  className={`bg-transparent w-full h-full text-right  text-[1.5rem] text-very-dark-cyan px-[.9375rem] py-[.5rem] pl-[2.5rem]  no-spinners ${
                    bill === 0 ? "outline-orange-600" : "outline-strong-cyan"
                  }`}
                  placeholder="0"
                  value={bill}
                  onChange={onChangeBill}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
              <div className="grid gap-3 grid-cols-2 grid-rows-3 sm:grid-rows-2 sm:grid-cols-3 text-white text-[1.375rem]">
                <button
                  className={`py-[.5625rem] hover:bg-light-grayish-cyan hover:text-very-dark-cyan rounded-md cursor-pointer ${
                    tip === 5
                      ? "bg-strong-cyan text-very-dark-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => setTip(5)}
                >
                  5%
                </button>
                <button
                  className={`py-[.5625rem] hover:bg-light-grayish-cyan hover:text-very-dark-cyan rounded-md cursor-pointer ${
                    tip === 10
                      ? "bg-strong-cyan text-very-dark-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => setTip(10)}
                >
                  10%
                </button>
                <button
                  className={`py-[.5625rem] hover:bg-light-grayish-cyan hover:text-very-dark-cyan rounded-md cursor-pointer ${
                    tip === 15
                      ? "bg-strong-cyan text-very-dark-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => setTip(15)}
                >
                  15%
                </button>
                <button
                  className={`py-[.5625rem] hover:bg-light-grayish-cyan hover:text-very-dark-cyan rounded-md cursor-pointer ${
                    tip === 25
                      ? "bg-strong-cyan text-very-dark-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => setTip(25)}
                >
                  25%
                </button>
                <button
                  className={`py-[.5625rem]  hover:bg-light-grayish-cyan hover:text-very-dark-cyan rounded-md cursor-pointer ${
                    tip === 50
                      ? "bg-strong-cyan text-very-dark-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={() => setTip(50)}
                >
                  50%
                </button>
                <input
                  type="number"
                  className="text-center py-[.3125rem] bg-slate-100 rounded-md outline-strong-cyan text-very-dark-cyan appearance-none"
                  placeholder="Custom"
                  value={tip}
                  onChange={onChangeTip}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex justify-between w-full">
                <h2 className="text-dark-grayish-cyan">Number of people</h2>
                <p
                  className={`text-orange-600 ${people === 0 ? "" : "hidden"}`}
                >
                  Can't be zero
                </p>
              </div>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[.9375rem] left-[.9375rem]">
                  <img src={person} alt="person icon" />
                </span>
                <input
                  type="number"
                  className={`bg-transparent w-full h-full text-right  text-[1.5rem] text-very-dark-cyan px-[.9375rem] py-[.5rem] pl-[2.5rem]  no-spinners ${
                    people === 0 ? "outline-orange-600" : "outline-strong-cyan"
                  }`}
                  placeholder="0"
                  value={people}
                  onChange={onChangePeople}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3.125rem] lg:justify-between bg-very-dark-cyan w-full h-full p-[1.5625rem] lg:p-[2.5rem] rounded-2xl">
            <div className="flex flex-col gap-[2.1875rem] lg:gap-[3.75rem] mt-[.3125rem]">
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white text-[.875rem] lg:text-[1rem]">
                    Tip Amount
                  </h3>
                  <p className="text-[.6875rem] lg:text-[.7813rem] text-grayish-cyan">
                    / person
                  </p>
                </div>
                <p className="text-[2.1875rem] lg:text-[2.875rem] leading-none">
                  ${tipAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white text-[.875rem] lg:text-[1rem]">
                    Total
                  </h3>
                  <p className="text-[.6875rem] lg:text-[.7813rem] text-grayish-cyan">
                    / person
                  </p>
                </div>
                <p className="text-[2.1875rem] lg:text-[2.875rem] leading-none">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className={`w-full py-[.625rem] rounded-md text-very-dark-cyan text-[1.125rem]  ${
                (bill && tip && people) == ""
                  ? "cursor-not-allowed bg-[#487b7e]"
                  : "cursor-pointer bg-strong-cyan hover:bg-light-grayish-cyan"
              }`}
              onClick={handleReset}
              disabled={(bill && tip && people) == ""}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
