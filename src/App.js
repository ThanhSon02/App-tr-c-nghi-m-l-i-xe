import { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

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
            <Quiz sendAns={setAnswer} />
        </>
    );
}

export default App;
