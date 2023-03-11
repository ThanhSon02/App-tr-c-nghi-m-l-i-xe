import "../App.css";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Quiz({ quizs, sendAns, showTheResult, minutes = 20, seconds = 0, sendTimer }) {
    const [_seconds, setSeconds] = useState(seconds);
    const [_minutes, set_Minutes] = useState(minutes);
    const [time, setTime] = useState(60);

    const [checked, setChecked] = useState("");
    const [answer, setAnswer] = useState([]);
    const [questionId, setQuestionId] = useState(0);

    const radioWrapper = useRef();
    const nextBtn = useRef();
    const prevBtn = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (_seconds > 0) {
                setSeconds(_seconds - 1);
            } else if (_minutes > 0) {
                set_Minutes(_minutes - 1);
                setSeconds(59);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [_minutes, _seconds]);

    useEffect(() => {
        setTime(_minutes * 60 + _seconds);
    }, [_minutes, _seconds]);

    useEffect(() => {
        if (checked !== "") {
            nextBtn.current.disabled = false
            nextBtn.current.classList.remove("disable");
        } else {
            nextBtn.current.disabled = true
            nextBtn.current.classList.add("disable");
        }
    }, [checked]);

    useEffect(() => {
        if (answer[questionId] !== undefined) { 
            setChecked(answer[questionId].a);
        }
    }, [questionId]);

    useEffect(() => {
        if (time === 0) {
            const ans = [
                ...answer,
                (answer[questionId] = {
                    q: quizs[questionId].qs,
                    img: quizs[questionId].image,
                    a: checked,
                }),
            ];
            setAnswer(ans);
            sendAns(answer);
            sendTimer(minutes * 60 + seconds);
            showTheResult();
        }
    }, [time]);

    const handlePrev = () => {
        setQuestionId(questionId - 1);
    };

    const handleNext = () => {
        const ans = [...answer];
        ans[questionId] = {
            q: quizs[questionId].qs,
            img: quizs[questionId].image,
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
        if (checked === "") {
            return;
        }
        const ans = [
            ...answer,
            (answer[questionId] = {
                q: quizs[questionId].qs,
                img: quizs[questionId].image,
                a: checked,
            }),
        ];

        setAnswer(ans);
        sendAns(answer);
        sendTimer(minutes * 60 + seconds - time);
        showTheResult();
    };

    return (
        <section className="bg-secondary flex flex-col h-screen justify-center items-center p-6 overflow-y-auto">
            {/* Timer section */}
                <h3 className="grid text-center my-10 md:mt-0 text-white font-semibold text-5xl">
                    {_minutes < 10 ? "0" + _minutes : _minutes} :{" "}
                    {_seconds < 10 ? "0" + _seconds : _seconds}
                </h3>

            {/* Question */}
            <div className="drop-shadow-[0_4px_32px_0_rgba(15, 23, 42, 0.15)] bg-white rounded text-zinc-900 md:w-4/5 p-6 md:p-6 grid gap-6 md:gap-8 md:grid-cols-2 md:h-450 mb10 md:mb-0">
                <div className="question grid col-span-3 md:col-span-1 gap-4">
                    <h1 className="text-2xl font-semibold row-span-1">
                        Câu: {quizs[questionId].id + 1} / {quizs.length}
                    </h1>
                    <div className="grid md:row-span-4 md:gap-3">
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

                {/* Options */}
                <div ref={radioWrapper} className="answers grid col-span-3 md:col-span-1 gap-4">
                    {quizs[questionId].options.map((option, key) => (
                        <label
                            key={key}
                            className={
                                option === checked
                                    ? "text-center flex justify-center items-center border-2 rounded-3xl p-2 text-lg text-slate-800 font-medium option active"
                                    : "text-center flex justify-center items-center border-2 rounded-3xl p-2 text-lg text-slate-800 font-medium option"
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
                            <p>{option}</p>
                        </label>
                    ))}
                </div>

                {/* Buttons */}
                <div className="col-span-3 grid grid-cols-3 md:grid-cols-2 gap-3">
                    {/* Prev Button */}
                    <button
                        ref={prevBtn}
                        hidden={questionId === 0}
                        className={
                            "button px-8 py-2 border-2 rounded-md place-self-start col-span-1"
                        }
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Next Button */}
                    <button
                        ref={nextBtn}
                        className={
                            "button px-8 py-2 border-2 rounded-md place-self-end col-span-1 col-end-4"
                        }
                        onClick={handleNext}
                        hidden={questionId === quizs.length - 1}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    {/* Submit Button */}
                    <button
                        className={
                            "button font-medium px-8 py-2 border-2 rounded-md place-self-end col-span-1 col-end-4"
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
