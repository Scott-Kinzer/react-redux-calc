import React from "react";
import {connect} from "react-redux";
import {addOperationCreator} from "../../../redux/reducers/calcReducer";
import "./OperationCalc.css";

const OperationCalc = (props:any) => {
    const operationsEl = "+-*/"

    return (
        <div className="operation-wrap">
            { operationsEl.split("").map(el => {
            return <OperationEl addToStateOperation={props.addOperationCreator} el={el} />
        })}
        </div>
    )
}

const mapDispatchToProps = (dispatch:any ) => {
    return {
        addOperationCreator(num:any)  {
            dispatch(addOperationCreator(num))
        }
    }
}

export default connect(null, mapDispatchToProps)(OperationCalc)

const OperationEl = (props:any) => {

    return (
        <div onClick={() => {

            props.addToStateOperation(props.el)
        }}

             className="operation-wrapper">

            <span>{props.el}</span>
        </div>
    )
}

