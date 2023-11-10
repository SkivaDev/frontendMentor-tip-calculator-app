import "./App.css";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-dark-blue">
      <div className="flex flex-col gap-8 max-w-[33.7rem] m-[1.3rem] mb-[4rem]">
        <div className="w-full text-center">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>

        <div className="w-full h-[400px] grid grid-cols-2 p-[1rem] bg-white text-center rounded-xl gap-7">
          <div className=" bg-black h-full">
            <div>
              <h2>Bill</h2>
              <div>
                <span>$</span>
                <input type="text" />
              </div>
            </div>
            <div>
              <h2>Select Tip %</h2>
              <div className="grid gap-2 grid-cols-3 grid-rows-2 p-7 text-white">
                <div className="px-[10px] py-[5px] bg-green-800 ">
                  5%
                </div>
                <div className="px-[10px] py-[5px] bg-green-800 ">
                  10%
                </div>
                <div className="px-[10px] py-[5px] bg-green-800 ">
                  15%
                </div>
                <div className="px-[10px] py-[5px] bg-green-800 ">
                  25%
                </div>
                <div className="px-[10px] py-[5px] bg-green-800">
                  50%
                </div>
                <input type="text" className="px-[20px] py-[5px] bg-slate-400 " placeholder="Custom"/>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-green-700 w-full h-full p-7">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="text-start">
                  <h3 className="text-white">Tip Amount</h3>
                  <p>/ person</p>
                </div>
                <div>$0.00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-start">
                  <h3 className="text-white">Total</h3>
                  <p>/ person</p>
                </div>
                <div>$0.00</div>
              </div>
            </div>
            <button className="w-full py-2 rounded-md bg-green-400">
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
