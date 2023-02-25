import "./App.css";
import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import data from "./data";

function App() {
    const [isStart, setIsStart] = useState(false);
    const [answer, setAnswer] = useState([]);

    const startQuiz = () => {
        setIsStart(!isStart);
    };

    return (
        <>
            {/* Wellcome Page */}
            <Start isStart={isStart} startQuiz={startQuiz} />

            {/* Quiz Page */}
            <Quiz quizs={data} sendAns={setAnswer} />
        </>
    );
}

export default App;
