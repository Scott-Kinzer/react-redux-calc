import React from "react";
import "./HeaderCalc.css";
import {connect} from "react-redux";

const HeaderCalc = (props:any) => {

    return (
        <div className="header-calc-wrapper">
            {props.elements.length > 0 ? props.elements.map((el:any) => {
                return <HeaderCalcElem el={el}/>
            }) : <div>Enter numbers</div>}
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        elements: state.calcReducer.elementsCalc
    }
}
export default connect(mapStateToProps)(HeaderCalc)

const HeaderCalcElem = ({el}:any) => {
    return (
        <div>{el}</div>
    )
}

