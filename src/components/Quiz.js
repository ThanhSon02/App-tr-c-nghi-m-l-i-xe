import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Quiz.css";

function Quiz({ quizs, sendAns }) {
    const [checked, setChecked] = useState();
    const [chosen, setChosen] = useState([]);
    const [questionId, setQuestionId] = useState(0);

    console.log(checked);

    const fc1 = (checked, chosen, id) => {};

    useEffect(() => {
        const temp = [];
        if (checked) {
            temp.push(checked);
        }
        setChosen(temp);
    }, [questionId]);

    return (
        <section className="bg-slate-700 flex flex-col justify-center items-center min-h-screen">
            <div className="flex justify-center align-middle my-12 text-center md:mt-0">
                <CountdownTimer minutes={30} />
            </div>
            <div className="drop-shadow-lg bg-slate-100 rounded text-zinc-900 w-4/5 p-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:h-450">
                <div className="question grid gap-4">
                    <h1 className="text-2xl font-semibold row-span-1">
                        Question: {quizs[questionId].id + 1} / {quizs.length}
                    </h1>
                    <div className="grid row-span-4 gap-3">
                        <h4
                            className={
                                quizs[questionId].image
                                    ? "text-xl justify-start row-span-auto"
                                    : "text-xl justify-start row-span-auto place-self-center"
                            }
                        >
                            {quizs[questionId].qs}
                        </h4>
                        {/* option: image,... */}
                        {quizs[questionId].image ? (
                            <img
                                className="place-self-center row-span-4"
                                src={quizs[questionId].image}
                                sizes="1"
                                alt="pic1"
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="answers grid gap-4">
                    {quizs[questionId].anss.map((ans, key) => (
                        <label
                            htmlFor={key}
                            key={key}
                            className="text-center border-4 rounded-3xl p-2 hover:border-stone-800 focus:border-red-700 text-lg text-slate-800 font-medium"
                        >
                            <input id={key} type={"radio"} />
                            {ans}
                        </label>
                    ))}
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <button
                        className={
                            questionId === 0
                                ? "px-3 py-2 border-2 rounded-md place-self-end disable"
                                : "px-3 py-2 border-2 rounded-md place-self-end"
                        }
                        onClick={() => {
                            setQuestionId(questionId - 1);
                        }}
                        disabled={questionId === 0}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        className={
                            questionId === quizs.length - 1
                                ? "px-3 py-2 border-2 rounded-md place-self-start disable"
                                : "px-3 py-2 border-2 rounded-md place-self-start"
                        }
                        onClick={() => {
                            setQuestionId(questionId + 1);
                        }}
                        disabled={questionId === quizs.length - 1}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Quiz;
