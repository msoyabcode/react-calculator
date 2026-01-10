import React, { useState } from 'react'

const App = () => {

  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [expression, setExpression] = useState("")

  // 🔢 Number click
  const handleNumber = (num) => {
    if (display === "0") {
      setDisplay(num)
      setExpression(num)
    } else {
      setDisplay(prev => prev + num)
      setExpression(prev=>prev+num)
    }
  }

  // ➕ ➖ ✖ ➗ Operator click
  const handleOperator = (op) => {
    const currentNumber = Number(display)

    if (firstNumber === null) {
      // pehli baar operator press hua
      setFirstNumber(currentNumber)
    } else {
      // chain calculation
      let result
      if (operator === "+") result = firstNumber + currentNumber
      if (operator === "-") result = firstNumber - currentNumber
      if (operator === "*") result = firstNumber * currentNumber
      if (operator === "/") result = firstNumber / currentNumber

      setFirstNumber(result)
    }
    setOperator(op)
    setDisplay("")
    setExpression(prev => prev + " " + op + " ")
  }

  // =
  const handleEqual = () => {
    if (firstNumber === null || operator === null) return

    const secondNumber = Number(display)
    let result

    if (operator === "+") result = firstNumber + secondNumber
    if (operator === "-") result = firstNumber - secondNumber
    if (operator === "*") result = firstNumber * secondNumber
    if (operator === "/") result = firstNumber / secondNumber

    setDisplay(String(result))
    setExpression(String(result))
    setFirstNumber(null)
    setOperator(null)
  }

  // 🧹 Clear
  const handleClearButton = () => {
    setDisplay("0")
    setExpression("")
    setFirstNumber(null)
    setOperator(null)
  }

  // .
  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(prev => prev + ".")
      setExpression(prev => prev + ".")  
    }
  }

  const btn = "bg-gray-700 text-xl sm:text-3xl w-full h-14 sm:h-16 flex justify-center items-center rounded-xl shadow-2xl  active:bg-gray-800 cursor-pointer active:scale-95 transition-all"
  const sign = "bg-amber-700 text-xl sm:text-3xl w-full h-14 sm:h-16 flex justify-center items-center rounded-xl shadow-2xl active:bg-amber-800 cursor-pointer active:scale-95 transition-all"

  return (
    <div  className='  h-screen flex justify-center items-center '>
      {/* Calculator */}
      <div className=' text-white w-[95%]  md:w-[620px] h-auto bg-gray-800 rounded-2xl flex justify-center flex-col pb-10'>

        <div className='bg-black w-[90%] h-[80px] sm:h-[90px] mt-6 rounded flex flex-col justify-end pr-5 mx-auto'>
          {/* Expression */}
          <div className='text-gray-400 text-md text-right truncate'>
            {expression}
         </div>
         {/* Display */}
          <div className='text-4xl sm:text-6xl md:text-7xl font-semibold text-right'>
            {display}
          </div>
       </div> ̰
       
        {/* Buttons Section */}
        <div className='grid grid-cols-4 w-[90%] gap-3 sm:gap-5 md:gap-6 mt-8  mx-auto'>

          <button onClick={handleClearButton} className='bg-gray-400 text-3xl w-full h-16 flex justify-center items-center rounded-lg shadow-2xl col-span-3 active:bg-gray-500 cursor-pointer active:scale-95 transition-all'>Clear All</button>
          <button onClick={()=>handleOperator("/")} className={`${sign}`}>/</button>
          <button onClick={()=>handleNumber("7")} className={`${btn}`}>7</button>
          <button onClick={()=>handleNumber("8")} className={`${btn}`}>8</button>
          <button onClick={()=>handleNumber("9")} className={`${btn}`}>9</button>
          <button  onClick={()=>handleOperator("+")} className={`${sign}`}>+</button>
          <button onClick={()=>handleNumber("4")} className={`${btn}`}>4</button>
          <button onClick={()=>handleNumber("5")} className={`${btn}`}>5</button>
          <button onClick={()=>handleNumber("6")} className={`${btn}`}>6</button>
          <button  onClick={()=>handleOperator("-")} className={`${sign}`}>-</button>
          <button onClick={()=>handleNumber("1")} className={`${btn}`}>1</button>
          <button onClick={()=>handleNumber("2")} className={`${btn}`}>2</button>
          <button onClick={()=>handleNumber("3")} className={`${btn}`}>3</button>
          <button  onClick={()=>handleOperator("*")} className={`${sign}`}>*</button>
          <button onClick={()=>handleNumber("0")} className={` col-span-2 ${btn}`}>0</button>
          <button onClick={handleDecimal} className={`${btn}`}>.</button>
          <button  onClick={handleEqual} className={`${sign}`}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App


