import React, {useState} from "react";
import useInput from "../../hooks/useInput";

function RestaurantBill() {

    const [amount, onAmountChange] = useInput(0);
    const [tip, onTipChange] = useInput(0);

    const [finalAmount, setFinalAmount] = useState(0);
    const [isFinalAmountCalculated, setIsFinalAmountCalculated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalAmount(calculateFinalAmount());
        setIsFinalAmountCalculated(true);
    }
    const calculateFinalAmount = () => {
        const taxValue = 0.07;
        return parseFloat(amount) * (1 + taxValue) + parseFloat(amount) * tip * 0.01;
    }
    if (isFinalAmountCalculated) {
        return <p>Wartość rachunku wraz z napiwkiem wynosi {finalAmount.toFixed(2)}</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={onAmountChange}/>
            <select onChange={onTipChange}>
                <option>0</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
            </select>
            <button type="submit">Przelicz</button>
        </form>
    );
}

export default RestaurantBill;