import React,{useState, useEffect} from 'react';

function Calculator() {
  const [currentSum,setCurrentSum] = useState(0);
  const [clear,setClear] = useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();

    if(clear) setClear(false);

    let currentNum1 = document.querySelector('#num1').value;
    let currentNum2 = document.querySelector('#num2').value;

    if(currentNum1=='' && currentNum2=='')
    return;
    let sum= currentSum+parseInt(currentNum1)+parseInt(currentNum2);
    setCurrentSum(sum);
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = '';
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>  
            <input type="text" id="num1" placeholder="enter a number" />
            <input type="text" id="num2" placeholder="enter a number" />
            {/* <input type="text" id="result" value={currentSum}  readOnly />  */}
            <h3 id="result">Result is: {currentSum}</h3>
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default Calculator;