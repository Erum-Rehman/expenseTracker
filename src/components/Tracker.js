import React, { useState } from 'react'
import History from './History'
import Button from '@mui/material/Button';

export default function Expense() {
    const [detail, setDetail] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('expense')
    const [arr, setArr] = useState([])
    const [Balance, setBalance] = useState('')
    const [totalIncome, setTotalIncome] = useState('')
    const [totalExpense, setTotalExpense] = useState('')

    function keyUp(e, addClick) {
        if (e.keyCode === 13 || addClick) {
            if (detail && amount) {
                const myObj = {
                    detail: detail,
                    amount: amount,
                    type: type
                }

                const list = [...arr, myObj]
                setArr(list)
                let totalIncome = list.reduce((accumulator, current) => current.type === 'income' ? accumulator + Number(current.amount) : accumulator, 0)
                setTotalIncome(totalIncome)

                let totalExpense = list.reduce((accumulator, current) => current.type === 'expense' ? accumulator + Number(current.amount) : accumulator, 0)
                setTotalExpense(totalExpense)

                const Balance = totalIncome - totalExpense
                setBalance(Balance)
                setDetail('')
                setAmount('')
            }
        }
    }


    const onInputChange = (e) => {
        setDetail(e.target.value)

    }
    const onInput = (e) => {
        setAmount(e.target.value)

    }
    const dropdownSelect = (e) => {
        setType(e.target.value)

    }
    const removeData = (index) => {
        arr.splice(index, 1)
        const list = [...arr]
        setArr(list)
        let totalIncome = list.reduce((accumulator, current) => current.type === 'income' ? accumulator + Number(current.amount) : accumulator, 0)
        setTotalIncome(totalIncome)

        let totalExpense = list.reduce((accumulator, current) => current.type === 'expense' ? accumulator + Number(current.amount) : accumulator, 0)
        setTotalExpense(totalExpense)

        const Balance = totalIncome - totalExpense
        setBalance(Balance)
    }

    return (
        <>
            <h1 className="main-head">Expense Tracker</h1>
            <div className="main">
                <div className="sub">
                    <h1 className="bal">Current Balance</h1>
                    <h2 className="num" >Rs: {Balance}</h2>
                </div>

                <input className="title" placeholder="Enter Title" onKeyUp={(e) => keyUp(e)} value={detail} onChange={(e) => onInputChange(e)} />
                <div className="desc">
                    <input className="amount" placeholder="Enter Amount" type="number" onKeyUp={(e) => keyUp(e)} value={amount} onChange={(e) => onInput(e)} />
                    <select className="dropdown" onChange={(e) => dropdownSelect(e)}>
                        <option value="expense">Expense </option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <Button variant="contained" color="success" id="addBut" onClick={(e) => keyUp(e, true)}> Add Detail </Button>
                <div>
                <div className="Expenditure">
                    <div className="incCol">Income: {totalIncome}</div>
                    <div className="expCol">Expense: {totalExpense}</div>
                    
                </div>
                    <History arr={arr} removeData={removeData} />
                </div>
            </div>
        </>
    )
}

