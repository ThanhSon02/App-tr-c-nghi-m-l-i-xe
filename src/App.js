import "./App.css";
import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import data from "./data";

function App() {
    const [answer, setAnswer] = useState([]);

    const [showStart, setShowStart] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const startQuiz = () => {
        setShowStart(false);
        setShowQuiz(true);
    };

    const showTheResult = () => {
        setShowStart(false);
        setShowQuiz(false);
        setShowResult(true);
    };

    const startOver = () => {
        setShowStart(true);
        setShowQuiz(false);
        setShowResult(false);
    };

    return (
        <>
            {/* Wellcome Page */}
            <Start showStart={showStart} startQuiz={startQuiz} />

            {/* Quiz Page */}
            <Quiz
                showQuiz={showQuiz}
                quizs={data}
                sendAns={setAnswer}
                showTheResult={showTheResult}
            />

            {/* Result Page */}
            <Result showResult={showResult} startOver={startOver} />
        </>
    );
}

export default App;
