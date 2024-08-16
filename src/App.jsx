import React, { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from '../CustomHooks/renamed.js'



function App() {
  console.log("app compo rendered");


 const [amount,setAmount] = useState(0);
 const [from,setFrom]  = useState("usd");
 const [to,setTo]    = useState("inr");
 const [convertedAmount,setConvertedAmount] = useState(0);

 
 const currencyInfo = useCurrencyInfo(from)

 const options = currencyInfo?.rates ? Object.keys(currencyInfo.rates) : [];

 const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
 }

 const convert = () => {
  if (currencyInfo && currencyInfo.rates) {
      setConvertedAmount(amount * currencyInfo.rates[to]);
  }
};
 
  return (
    <>
       <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,

        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
