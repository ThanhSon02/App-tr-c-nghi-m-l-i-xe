import { useState } from "react";
import { image } from "../assets/img";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Quiz({ sendAns }) {

    const question = {
        id: 1,
        qs: "“Làn đường” là gì?",
        image: image,
        anss: [
            "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            "A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy."
        ],
        correctAns: 0
    }

    const [checked, setChecked] = useState()

    console.log(checked);

    return (
        <section className="bg-slate-700 flex flex-col justify-center items-center min-h-screen">
            <div className="flex justify-center align-middle my-12 text-center md:mt-0">
                <CountdownTimer minutes={30}/>
            </div>
            <div className="drop-shadow-lg bg-slate-100 rounded text-zinc-900 w-4/5 p-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:h-450">
                <div className="question grid gap-4">
                    <h1 className="text-2xl font-semibold row-span-1">Question: 1/20</h1>
                    <div className="grid row-span-4 gap-3">
                        <h4 className={question.image ? "text-xl justify-start row-span-auto" : "text-xl justify-start row-span-auto place-self-center"}>{question.qs}</h4>
                        {/* option: image,... */}
                        {question.image ? (<img className="place-self-center row-span-4" src={question.image} sizes="1" alt="pic1"/>) : ""}
                    </div>
                </div>
                <div className="answers grid gap-4">
                    {question.anss.map((ans, key) => (
                        <button
                            key={key}
                            className="text-center border-4 rounded-3xl p-2 hover:border-stone-800 focus:border-red-700 text-lg text-slate-800 font-medium"
                            onFocus={() => setChecked(key)}

                        >
                            {ans}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <button>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </section>
    );
}

export default Quiz;