import { useRef, useState } from "react";
import { image } from "../assets/img";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Quiz({ sendAns }) {
    const question = [
        {
            id: 1,
            qs: "“Làn đường” là gì?",
            image: image,
            anss: [
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            ],
            correctAns: 0,
        },
        {
            id: 2,
            qs: "“Làn đường” là gì? (2)",
            image: image,
            anss: [
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            ],
            correctAns: 1,
        },
        {
            id: 3,
            qs: "“Làn đường” là gì? (2)",
            image: image,
            anss: [
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            ],
            correctAns: 1,
        },
        {
            id: 4,
            qs: "“Làn đường” là gì? (2)",
            image: image,
            anss: [
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            ],
            correctAns: 1,
        },
        {
            id: 5,
            qs: "“Làn đường” là gì? (2)",
            image: image,
            anss: [
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            ],
            correctAns: 1,
        },
    ];

    const [checked, setChecked] = useState();
    const [questionId, setQuestionId] = useState(0);
    const nextBtnRef = useRef();
    const backBtnRef = useRef();

    const nextQuestion = () => {
        questionId === question.length - 1
            ? (nextBtnRef.current.disable = true)
            : setQuestionId(questionId + 1);
    };

    const backQuestion = () => {
        questionId === 0
            ? (backBtnRef.current.disable = true)
            : setQuestionId(questionId - 1);
    };

    return (
        <section className="bg-slate-700 flex flex-col justify-center items-center min-h-screen">
            <div className="flex justify-center align-middle my-12 text-center md:mt-0">
                <CountdownTimer minutes={30} />
            </div>
            <div className="drop-shadow-lg bg-slate-100 rounded text-zinc-900 w-4/5 p-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:h-450">
                <div className="question grid gap-4">
                    <h1 className="text-2xl font-semibold row-span-1">
                        Question: {question[questionId].id} / {question.length}
                    </h1>
                    <div className="grid row-span-4 gap-3">
                        <h4
                            className={
                                question[questionId].image
                                    ? "text-xl justify-start row-span-auto"
                                    : "text-xl justify-start row-span-auto place-self-center"
                            }
                        >
                            {question[questionId].qs}
                        </h4>
                        {/* option: image,... */}
                        {question[questionId].image ? (
                            <img
                                className="place-self-center row-span-4"
                                src={question[questionId].image}
                                sizes="1"
                                alt="pic1"
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="answers grid gap-4">
                    {question[questionId].anss.map((ans, key) => (
                        <button
                            key={key}
                            className="text-center border-4 rounded-3xl p-2 hover:border-stone-800 focus:border-red-700 text-lg text-slate-800 font-medium"
                            onFocus={() => setChecked(key)}
                        >
                            {ans}
                        </button>
                    ))}
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <button
                        className="px-3 py-2 border-2 rounded-md  place-self-end"
                        onClick={backQuestion}
                        ref={backBtnRef}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        className="px-3 py-2 border-2 rounded-md  place-self-start"
                        onClick={nextQuestion}
                        ref={nextBtnRef}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Quiz;
