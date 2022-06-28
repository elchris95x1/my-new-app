import React, { useState, useEffect } from "react"

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(24)
    const [seconds, setSeconds] = useState(59)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [message, setMessage] = useState("Time to focus!")

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                    setMessage("Time to focus!")
                } else {
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                    setMessage("Break time!")
                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000)
    }, [seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
        <div>
            <div class="display-1">
                {timerMinutes}:{timerSeconds}
            </div>
            <div class="display-6">
                {message}
            </div>
        </div>
    )
}