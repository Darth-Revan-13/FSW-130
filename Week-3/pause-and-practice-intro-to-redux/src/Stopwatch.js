//Stopwatch.js
//Stopwatch component

import React, {useState, useRef} from "react"
import { connect } from "react-redux"
import {StopwatchContextConsumer} from "./stopwatchContext"
import {start, reset, laps} from "./Redux/action"

function Stopwatch (props) {
        const countRef = useRef(null)

        const handleStart = () => {
            countRef.current = setInterval(() => {
                props.dispatch(start())
            }, 1)
        }

        const handlePause = () => {
            clearInterval(countRef.current)
        }

        const handleLap = () => {
            props.dispatch(laps())
        }

        const handleReset = () => {
            clearInterval(countRef.current)
            props.dispatch(reset())
        }

        return(
                <div>
                    <h3>Stopwatch</h3>
                    <p>
                        {props.hours} : {props.minutes} : {props.seconds} : {props.miliseconds}
                    </p>
                    <div className="buttons">
                        <button onClick={handleStart}>Start</button>
                        <button onClick={handlePause}>Pause</button>
                        <button onClick={handleLap}>Laps</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                    <p>
                        {props.laps.map(lap=><h2>{lap}</h2>)}
                    </p>
                </div>
        )
    }

const mapStateToProps = state => {
    console.log(state.display)
    return{miliseconds: state.display.miliseconds,
        seconds: state.display.seconds,
        minutes: state.display.minutes,
        hours: state.display.hours,
        timer: state.timer,
        laps: state.laps}
}

export default connect(mapStateToProps)(Stopwatch)