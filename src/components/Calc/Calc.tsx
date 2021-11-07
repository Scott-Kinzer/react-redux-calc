import React from "react";
import "./Calc.css";
import HeaderCalc from "./HeaderCalc/HeaderCalc";
import ButtonsCalc from "./ButtonsCalc/ButtonsCalc";
import OperationCalc from "./OperationCalc/OperationCalc";
const Calc = () => {
    return (
        <div className="calc-wrapper">
            <HeaderCalc />
            <ButtonsCalc/>
            <OperationCalc/>
        </div>
    )
}

export default  Calc