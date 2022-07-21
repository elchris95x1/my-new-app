import React, { useState, useEffect } from "react"



export default function Pomodoro() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [message, setMessage] = useState("Time to focus!")
    const [bgColor, setBgColor] = useState("pomodoro-mode")
    const [startTimer, setStartTimer] = useState(false)
    const [pomodoroCounter, setPomodoroCounter] = useState(1)
    const [buttonText, setButtonText] = useState('Start')
    const [mode, setmode] = useState()

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            clearInterval(interval)
            if (startTimer) {
                if (seconds === 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
                else {
                    setSeconds(seconds - 1)
                }
            }
            autoSwitchMode()
        }, 1)
        return () => clearInterval(interval);
    })

    function handleStartStop() {
        setStartTimer(prevStartTimer => !prevStartTimer)
        setButtonText(() => startTimer ? "Start" : "Pause");
    }

    function timerMode(modeString) {
        if (modeString === "pomodoro") {
            setBgColor("pomodoro-mode")
            setMinutes(25)
            setSeconds(0)
            setMessage("Time to focus!")
        } else if (modeString === "shortBreak") {
            setBgColor("short-break-mode")
            setMinutes(5)
            setSeconds(0)
            setMessage("Take a short break!")
        }
        else if (modeString === "longBreak") {
            setBgColor("long-break-mode")
            setMinutes(15)
            setSeconds(0)
            setMessage("Take a long break!")
        }
        else {
            console.log("Error: Timer Mode Function");
        }
    }

    function handleTimerTab(event) {
        if (event.target.value === "pomodoro") {
            timerMode("pomodoro")
        } else if (event.target.value === "shortBreak") {
            timerMode("shortBreak")
        }
        else if (event.target.value === "longBreak") {
            timerMode("longBreak")
        }
        else {
            console.log("Error: Radio buttons");
        }
    }

    function autoSwitchMode() {
        if (!seconds && !minutes) {
            if (bgColor === "pomodoro-mode") {
                if (pomodoroCounter === 4) {
                    timerMode("longBreak")
                    setPomodoroCounter(0)
                }
                else {
                    timerMode("shortBreak")
                    setPomodoroCounter(prevPomodoroCounter => prevPomodoroCounter + 1)
                }
            } else {
                timerMode("pomodoro")
            }
        }
    }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
        <div className={bgColor}>
            <div class="col text-center shadow-sm p-3 mb-5 text-white rounded" >
                <h2>Pomodore Timebox</h2>
                <div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons" >
                        <label class="btn btn-outline-light">
                            <input type="radio" name="options" id="option1" value="pomodoro" autocomplete="off" onClick={handleTimerTab} /> Pomodoro
                        </label>
                        <label class="btn btn-outline-light">
                            <input type="radio" name="options" id="option2" value="shortBreak" autocomplete="off" onClick={handleTimerTab} /> Short Break
                        </label>
                        <label class="btn btn-outline-light">
                            <input type="radio" name="options" id="option3" value="longBreak" autocomplete="off" onClick={handleTimerTab} /> Long Break
                        </label>
                    </div>

                    <div class="display-1">
                        {timerMinutes}:{timerSeconds}
                    </div>
                    <div class="display-6 p-2">
                        {message}
                    </div>

                    <button type="button" class="btn btn-primary btn-lg " onClick={handleStartStop}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

