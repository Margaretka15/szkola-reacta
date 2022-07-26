import React, {useEffect, useState} from "react";

import './calculator.css';

import List from "./List";
import {useForm} from "react-hook-form";
import AccountBalance from "./AccountBalance";

let expenses = [{
    name: "4yh",
    amount: "100",
    category: "",
    id: "0"

},
    {
        name: "thy",
        amount: "100",
        category: "gg",
        id: "1"
    }];

let revenues = [
    {
        name: "pensja",
        amount: "5000",
        id: "0"
    }
];

/// do kogoś od CR - będę wdzięczna za info czy to sensowne pisać tu takiego hooka
// nie jest uniwersalny, git tylko dla tych dwóch tablic w tym konkretnym zadaniu, ale napisałam go po prostu dla przećwiczenia :)
function useArrayHook(initialValue = []) {

    const [array, setArray] = useState(initialValue);
    const addNewItem = ({name, amount, category}) => {
        setArray(array => [...array, {name: name, amount: amount, category: category, id: new Date().getTime()}]);
    }

    const deleteItem = (itemToDelete) => {
        setArray(array.filter((element) => {
            return element.id !== itemToDelete.id
        }));
    }

    return [array, addNewItem, deleteItem];
}

function Calculator() {

    const [revenuesData, addNewRevenue, deleteRevenue] = useArrayHook(revenues);

    const [expensesData, addNewExpense, deleteExpense] = useArrayHook(expenses);

    const [moneyEarned, setMoneyEarned] = useState(0);

    const [moneySpent, setMoneySpent] = useState(0);

    const calculateBalance = () => {

        setMoneySpent(expensesData.reduce((sum, current) => sum + parseInt(current.amount), 0));
        setMoneyEarned(revenuesData.reduce((sum, current) => sum + parseInt(current.amount), 0));
        setBalance(moneyEarned - moneySpent);

    }

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        calculateBalance();

    }, [moneySpent, moneyEarned]);

    const categories = ['food', 'service', 'medicine', 'cosmetics', 'other', 'salary'];
    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    const onSubmit = (data) => {
        if (data.type === "revenue") {
            addNewRevenue(data);
            setMoneyEarned((moneyEarned) => moneyEarned + data.amount);
        } else {
            addNewExpense(data);
            setMoneySpent((moneySpent) => moneySpent + data.amount);
        }
        reset({name: "", amount: "", type: "", category: ""})

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                       placeholder="Nazwa"
                       {...register("name", {
                           required: "Podaj nazwę",
                           minLength: {value: 2, message: "Nazwa musi zawierać min. 2 znaki"}
                       })}
                />
                <input type="number"
                       id="amount"

                       {...register("amount", {
                           required: "Podaj kwotę",
                           min: {value: 0, message: "Kwota nie moze byc ujemna"}
                       })}
                />
                <label htmlFor="amount">kwota</label>

                <input type="radio"
                       name="type"
                       value="revenue"
                       id="revenue"
                       {...register("type", {required: "Zaznacz"})}
                />
                <label htmlFor="revenue">przychód</label>

                <input type="radio"
                       name="type"
                       value="expense"
                       id="expense"
                       {...register("type")}
                />
                <label htmlFor="expense">wydatek</label>

                <select name="categories"
                        id="categories_select"
                        {...register("category")}>
                    {categories.map((e) => <option key={categories.indexOf(e) + "-category"} value={e}>{e}</option>)}
                </select>

                <button type="submit">Dodaj</button>
            </form>

            <div className="list-wrapper">
                <List title="Wydatki: " array={expensesData} deleteItem={deleteExpense}
                      updateListBalance={(item) => {
                          setMoneySpent((moneySpent) => moneySpent + item.amount);
                      }}/>
                <List title="Przychody:" array={revenuesData} deleteItem={deleteRevenue}
                      updateListBalance={(item) => {
                          setMoneyEarned((moneyEarned) => moneyEarned + item.amount);
                      }}/>
                <div>
                    <AccountBalance balance={balance}/>
                </div>
            </div>
        </>

    )


}

export default Calculator;