import "./App.css";
import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import data from "./data";

function App() {
    const [answer, setAnswer] = useState([]);
    const [timer, setTimer] = useState(0);
    const [step, setStep] = useState(1);

    const startQuiz = () => {
        setStep(2);
    };

    const showTheResult = () => {
        setStep(3);
    };

    const startOver = () => {
        setStep(1);
    };

    return (
        <>
            {/* Wellcome Page */}
            {step === 1 && <Start startQuiz={startQuiz} />}

            {/* Quiz Page */}
            {step === 2 && (
                <Quiz
                    quizs={data}
                    sendAns={setAnswer}
                    showTheResult={showTheResult}
                    minutes={30}
                    seconds={0}
                    sendTimer={setTimer}
                />
            )}

            {/* Result Page */}
            {step === 3 && (
                <Result startOver={startOver} answers={answer} timer={timer} />
            )}
        </>
    );
}

export default App;
