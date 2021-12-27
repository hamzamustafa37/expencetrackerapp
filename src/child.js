import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDes, setDesc] = useState();
  let [newAmount, setAmount] = useState();

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)
        	 income = income + transactions[i].amount;
    }
 
      return income;
    
  };

  const getexpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        	 expense = expense - transactions[i].amount;
    }
 console.log(expense)
      return expense;
    
  };
  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      amount: parseInt(newAmount),
      desc: newDes,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your Balance
        <br /> {getIncome()+getexpense()}
      </h3>
      <div className="expense-container">
        <h3>
          Your Income
          <br /> $ {getIncome()}
        </h3>
        <h3>
          Your Expense
          <br /> ${getexpense()}
        </h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="tansaction-list">
        {transactions.map((transObj, index) => {
          return (
            <li key={index}>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add new transaction</h3>
      <hr />
      <form className="tarnsaction-form" onSubmit={handleAddition}>
        <label>Enter Description </label>
        <br />
        <input
          type="text"
          onChange={(ev) => setDesc(ev.target.value)}
          required
        />

        <br />
        <label>Enter Amount</label>
        <br />

        <input
          type="text"
          onChange={(ev) => setAmount(ev.target.value)}
          required
        />
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
