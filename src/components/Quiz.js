import "./Quiz.css";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Quiz({ quizs, showQuiz, sendAns, showTheResult }) {
    const [checked, setChecked] = useState("");
    const [answer, setAnswer] = useState([]);
    const [questionId, setQuestionId] = useState(0);

    const radioWrapper = useRef();
    const nextBtn = useRef();
    const prevBtn = useRef();

    useEffect(() => {
        if (checked !== "") {
            nextBtn.current.classList.remove("disable");
        } else {
            nextBtn.current.classList.add("disable");
        }
    }, [checked]);

    useEffect(() => {
        if (answer[questionId] !== undefined) {
            setChecked(answer[questionId].a);
        }
        console.log(answer);
    }, [questionId]);

    const handlePrev = () => {
        setQuestionId(questionId - 1);
    };

    const handleNext = () => {
        if (checked === "") {
            nextBtn.current.disabled = true;
            return;
        }
        const ans = [...answer];
        ans[questionId] = {
            q: quizs.qs,
            a: checked,
        };
        setAnswer(ans);
        setChecked("");
        setQuestionId(questionId + 1);
        const findInputChecked =
            radioWrapper.current.querySelector("input:checked");
        if (findInputChecked) {
            findInputChecked.checked = false;
        }
    };

    const handleSubmit = () => {
        showTheResult();
        if (checked === "") {
            return;
        }
    };

    return (
        <section
            className="bg-slate-700 flex flex-col justify-center items-center min-h-screen"
            style={{ display: `${showQuiz ? "block" : "none"}` }}
        >
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
                <div ref={radioWrapper} className="answers grid gap-4">
                    {quizs[questionId].options.map((option, key) => (
                        <label
                            key={key}
                            className={
                                option === checked
                                    ? "text-center border-4 rounded-3xl p-2 text-lg text-slate-800 font-medium hover:border-emerald-300 border-orange-600"
                                    : "text-center border-4 rounded-3xl p-2 text-lg text-slate-800 font-medium hover:border-emerald-300"
                            }
                        >
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                className="opacity-0"
                                onChange={(e) => setChecked(e.target.value)}
                                checked={option === checked}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                    {/* Prev Button */}
                    <button
                        ref={prevBtn}
                        hidden={questionId === 0}
                        className={
                            "px-8 py-2 border-2 rounded-md place-self-start col-span-1 "
                        }
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Next Button */}
                    <button
                        ref={nextBtn}
                        className={
                            " px-8 py-2 border-2 rounded-md place-self-end col-span-1 col-end-3 disable"
                        }
                        onClick={handleNext}
                        hidden={questionId === quizs.length - 1}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    {/* Submit Button */}

                    <button
                        className={
                            "bg-violet-700 text-white font-medium hover:opacity-60 px-8 py-2 border-2 rounded-md place-self-end col-span-1 col-end-3 disable"
                        }
                        onClick={handleSubmit}
                        hidden={questionId < quizs.length - 1}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Quiz;
