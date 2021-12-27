import React, {useContext, useState} from "react";
import{TransactionContext} from './transContext';

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
let [newDes , setDesc] = useState()
let [newAmount , setAmount] = useState()



const handleAddition=(event)=>{
event.preventDefault();
addTransaction({
    amount:newAmount,
    desc: newDes
});

}
  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your Balance
        <br /> $ 260
      </h3>
      <div className="expense-container">
        <h3>
          Your Income
          <br /> $ 500
        </h3>
        <h3>
          Your Expense
          <br /> $ 240
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="tansaction-list">
         { transactions.map((transObj,index)=>{
             return(
        <li key={index}>
          <span>{transObj.desc}</span>
          <span>{transObj.amount}</span>
        </li>
             )
        })
}
      </ul>
      <h3>Add new transaction</h3>
      <hr />
      <form className="tarnsaction-form" onSubmit={handleAddition}>
        <label>Enter Description </label>
        <br />
        <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />

        <br />
        <label>Enter Amount</label>
        <br />

        <input type="text"  onChange={(ev)=>setAmount(ev.target.value)}  required />
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
