import { image } from "../assets/img";

function Quiz() {
    return (
        <section className="h-screen flex flex-col items-center">
            <div className="flex justify-center align-middle my-12 text-center">
                <h3 className="text-red-500">Coundown</h3>
            </div>
            <div className="containe text-white w-4/5 p-2.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="question">
                    <h2>Question: 1/20</h2>
                    <div>
                        <h4>“Làn đường” là gì?</h4>
                        {/* option: image,... */}
                        <img src={image} sizes="1" alt="pic1"/>
                    </div>
                </div>
                <div className="answer">
                    <button>A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.</button>
                    <button>A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.</button>
                    <button>A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.</button>
                    <button>A. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.</button>
                </div>
            </div>
        </section>
    );
}

export default Quiz;