import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../bll/store";
import {incValueAC} from "../bll/counterReducer";

type CounterPropsType = {
    title: string
}

export const Counter = (props: CounterPropsType) => {

    const value = useSelector<appStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <>
            <h1>{props.title}</h1>
            <h3>{value}</h3>
            <button onClick={incHandler}>inc</button>
        </>

    )
}