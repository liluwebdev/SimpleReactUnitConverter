import React, { useState } from "react";

function Converter() {
    const [inputValue, setInputValue] = useState("");
    const [unit, setUnit] = useState("m-to-ft");
    const [convertedValue, setConvertedValue] = useState("");

    const handleConversion = () => {
        let result = 0;
        let value = parseFloat(inputValue);

        if (isNaN(value)) {
            setConvertedValue("Enter a valid number");
            return;
        }

        switch (unit) {
            case "m-to-ft":
                result = value * 3.28084;
                break;
            case "ft-to-m":
                result = value / 3.28084;
                break;
            case "kg-to-lb":
                result = value * 2.20462;
                break;
            case "lb-to-kg":
                result = value / 2.20462;
                break;
            case "c-to-f":
                result = (value * 9/5) + 32;
                break;
            case "f-to-c":
                result = (value - 32) * 5/9;
                break;
            default:
                result = "Invalid conversion";
        }

        setConvertedValue(result.toFixed(2));
    };

    return (
        <div className="converter-container">
            <h2>Unit Converter</h2>
            <input 
                type="number" 
                placeholder="Enter value" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="m-to-ft">Meters to Feet</option>
                <option value="ft-to-m">Feet to Meters</option>
                <option value="kg-to-lb">Kilograms to Pounds</option>
                <option value="lb-to-kg">Pounds to Kilograms</option>
                <option value="c-to-f">Celsius to Fahrenheit</option>
                <option value="f-to-c">Fahrenheit to Celsius</option>
            </select>
            <button onClick={handleConversion}>Convert</button>
            <h3>Converted Value: {convertedValue}</h3>
        </div>
    );
};

export default Converter;
