import React from "react";
import "./ButtonsCalc.css";
import {connect} from "react-redux";
import {addActionCreator, deleteCountingCreator} from "../../../redux/reducers/calcReducer";

const ButtonsCalc = (props:any) => {
        const num:number = 9;
        return (
            <div className="btns-wrap">
                { [...Array(num)].map((btnEl,i, array) => {
                    return <BtnsEl addToState={props.addActionCreator} el={i + 1}/>
            })}
                <BtnsEl addToState={props.addActionCreator}  el={0}/>
                <div onClick={() => {
                    props.deleteCounting()
                }} className="btn-elem">
                    <span>DELETE</span>
                </div>
            </div>
   )
}



const mapDispatchToProps = (dispatch:any ) => {
    return {
        addActionCreator(num:any)  {
            dispatch(addActionCreator(num))
        },

        deleteCounting() {
            dispatch(deleteCountingCreator())
        }
    }
}

export default connect(null,mapDispatchToProps)(ButtonsCalc)


export const BtnsEl = (props:any) => {
    return (
        <div onClick={() => {
            props.addToState(props.el)
        }} className="btn-elem">
            <span>{props.el}</span>
        </div>
    )
}
