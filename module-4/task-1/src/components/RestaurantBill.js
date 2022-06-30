import React, {useState} from "react";

function RestaurantBill() {

    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const [isFinalAmountCalculated, setIsFinalAmountCalculated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleClick = () => {
        setFinalAmount(amount + amount * tip * 0.01);
        setIsFinalAmountCalculated(true);
        console.log(finalAmount.toFixed(2));
    }

    const onAmountChange = (event) => {
        setAmount(parseInt(event.target.value));
    }

    const onTipChange = (event) => {
        setTip(parseInt(event.target.value));
    }

    if (isFinalAmountCalculated)
    {
        return   <p>Wartość rachunku wraz z napiwkiem wynosi {finalAmount.toFixed(2)}</p>
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
            <button type="submit" onClick={handleClick}>Przelicz</button>
        </form>
    );
}
export default RestaurantBill;