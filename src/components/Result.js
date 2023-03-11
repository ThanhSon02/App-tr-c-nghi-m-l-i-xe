import data from "../data";
import '../App.css'
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
                <div className="bg-slate-100 md:h-2/5 md:w-4/5 w-5/6 h-3/5 p-4 container rounded flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-6">
                        Kết quả
                    </h1>
                    <div className="mb-6 text-center">
                        <h2 className="text-lg">
                            Số câu trả lời đúng: {correctAns} / {data.length}
                        </h2>
                        <h3 className="text-lg">Thời gian hoàn thành: <span className="text-red-500">{timer}</span > giây</h3>
                        {correctAns >= 3 ? 
                            <h3 className="text-xl font-medium">Chúc mừng bạn đã vượt qua phần thi lý thuyết!</h3>
                            :
                            <h3 className="text-xl font-medium">Bạn đã trượt phần thi lý thuyết!</h3>
                        }
                    </div>
                    <div className="flex gap-16 md:gap-96">
                        <button
                            className="button rounded px-2 py-3 md:px-2 md:py-2 text-base"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Kết quả chi tiết
                        </button>

                        <button
                            className="button rounded px-2 py-3 md:px-2 md:py-2 text-base"
                            onClick={startOver}
                        >
                            Làm lại
                        </button>
                    </div>
                </div>
            </section>
            <Modal showModal={showModal}>
                <section className="main-modal p-7 pt-0">
                    <div className="flex justify-between bg-white items-center mb-4 pt-7 pb-2 sticky top-0 z-10">
                        <h1 className="text-2xl font-bold">Kết quả chi tiết</h1>
                        <button
                            className="px-4 py-2 button rounded text-white"
                            onClick={handleShowModal}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {answers.map((result, index) => (
                                <div key={index} className="mb-4">
                                    <li className="question">Question {index + 1} : {result.q}</li>
                                    <img src={result.img} alt=""/>
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
