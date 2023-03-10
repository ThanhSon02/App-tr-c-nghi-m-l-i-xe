import data from "../data";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Result({ startOver, answers, timer }) {
    const [correctAns, setCorrectAns] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let correct = 0;
        answers.forEach((result, index) => {
            if (result.a === data[index].correctAns) {
                correct++;
            }
        });
        setCorrectAns(correct);
    }, []);

    const handleShowModal = () => {
        setShowModal(false);
    };

    return (
        <div className="">
            <section className="bg-slate-700 h-screen flex justify-center items-center">
                <div className="bg-slate-100 h-2/5 w-4/5 container rounded flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold text-neutral-900 mb-6">
                        Kết quả
                    </h1>
                    <div>
                        <h2>
                            Điểm: {correctAns} / {data.length}
                        </h2>
                        <h3>Thời gian hoàn thành: {timer} giây</h3>
                    </div>
                    <div className="flex gap-96">
                        <button
                            className="bg-lime-800 rounded px-8 py-2 text-base"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Check your answer
                        </button>

                        <button
                            className="bg-lime-800 rounded px-8 py-2 text-base"
                            onClick={startOver}
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </section>
            <Modal showModal={showModal}>
                <section className="main-modal p-7">
                    <div className="flex justify-between bg-white items-center mb-4 sticky top-0 z-10">
                        <h1 className="text-2xl font-bold">Your Answers</h1>
                        <button
                            className="px-4 py-2 bg-indigo-500 rounded text-white"
                            onClick={handleShowModal}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {answers.map((result, index) => (
                                <div key={index}>
                                    <li className="question">{result.q}</li>
                                    <p
                                        className={
                                            result.a === data[index].correctAns
                                                ? "bg-correct"
                                                : "bg-wrong"
                                        }
                                    >
                                        {result.a}
                                    </p>
                                    {result.a !== data[index].correctAns ? (
                                        <p className="bg-warning">
                                            {data[index].correctAns}
                                        </p>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>
            </Modal>
        </div>
    );
}

export default Result;
