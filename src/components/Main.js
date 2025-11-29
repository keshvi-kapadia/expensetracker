import React from "react";
import "../styles/Main.css";
import { useState } from "react";

function MainComponent() {
       const [totalExpense, setTotalExpense] = useState(0);
       const [totalIncome, setTotalIncome] = useState(0);
       const [Amount, setAmount] = useState(0);
       const [transType, setTransType] = useState("");
       const [Category,setCategory] = useState("");
       const [date, setDate] = useState("");

       const [transactions,setTransaction]=useState([]);


       const Balance =totalIncome-totalExpense;

       const addTransaction = (e) => {
        e.preventDefault();
        const newTransaction = {
            amount: Number(Amount),
            type: transType,
            category: Category,
            date: date
        };
        setTransaction(prev=>{
            const updated=[...prev,newTransaction];
            console.log(updated);
            return updated;
        });

        if(transType==="income"){
            setTotalIncome(prev=>{
                return Number(Number(totalIncome)+Number(Amount));
            });
        }
        else if(transType==="expense"){
            setTotalExpense(prev=>{
               return Number(Number(totalExpense)+Number(Amount));    
            });
        }
       }
  return (
    

    <div className="mainContainer">
        <h3 className="mainTitle">Let's Manage Expenses</h3>
        <div className="statsMainContainer">
            <div>
                <h3 className="statsTitle">Expense Statistics</h3>
            </div>
            <div className="stats" id="stats">
               
                <div className="innerContainer">
                    <h4 className="divTitle">Total Income</h4>
                    <p className="incomeAmount">₹{totalIncome}</p>
                </div>
                <div className="innerContainer">
                    <h4 className="divTitle">Total Expenses</h4>
                    <p className="expenseAmount">₹{totalExpense}</p>
                </div>
                <div className="innerContainer">
                    <h4 className="divTitle">Balance</h4>
                    <p className="balAmount">₹{Balance}</p>
                </div>
            </div>
        </div>

        <h3 className="mainTitle">Add New Transaction</h3>
        <div id="addTransaction" className="transactionContainer">
            <form className="transactionForm">
                <label className="formLabel">Enter Amount : </label>
                <input type="number" className="formInput" placeholder="Eg. 5000, 20000"
                 value={Amount} onChange={(e)=>{setAmount(e.currentTarget.value)}}/>
                <br/>
                <label className="formLabel">Type : </label>
                <input type="radio" name="type" value="income" className="formRadio" onClick={(e)=>{setTransType(e.currentTarget.value)}}/> Income
                <input type="radio" name="type" value="expense" className="formRadio" onClick={(e)=>{setTransType(e.currentTarget.value)}}/> Expense
                <br/>
                <label className="formLabel">Category : </label>
                <select className="formSelect" onChange={(e)=>{setCategory(e.currentTarget.value)}}>
                    <option value="" disabled selected>Select</option>
                    <option value="salary">Salary</option>
                    <option value="freelance">Freelance</option>
                    <option value="food">Food</option>
                    <option value="rent">Rent</option>
                    <option value="investment">Investment</option>
                    <option value="others">Others</option>
                </select>
                <br/>
                <label className="formLabel">Date : </label>
                <input type="date" className="formInput" onChange={(e)=>{setDate(e.currentTarget.value)}}/>
                
                <br/>
                <button type="submit" className="formButton" onClick={addTransaction}>Add Transaction</button>
            </form>
        </div>
    </div>
  );
}
export default MainComponent;