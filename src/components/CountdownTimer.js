import { useEffect, useState } from "react";

function CountdownTimer({minutes}) {

    const [seconds, setSeconds] = useState(0)
    const [_minutes, set_Minutes] =  useState(minutes)

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if(seconds > 0) {
    //             setSeconds(seconds - 1);
    //         } else if (_minutes > 0) {
    //             set_Minutes(_minutes - 1)
    //             setSeconds(59)
    //         } else {
    //             clearInterval(intervalId)
    //         }
    //     }, 1000)

    //     return () => {
    //         clearInterval(intervalId)
    //     }
    // }, [_minutes, seconds])

    return (
        <>
            <h3 className="text-red-700 font-semibold text-5xl">{_minutes < 10 ? ("0" + _minutes) : _minutes} : {seconds < 10 ? ("0" + seconds) : seconds}</h3>
        </>
    );
}

export default CountdownTimer;