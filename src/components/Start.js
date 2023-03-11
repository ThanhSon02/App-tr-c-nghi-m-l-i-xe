import '../App.css'
function Start({ startQuiz }) {
    return (
        <section className="bg-secondary h-screen">
            <div className="flex flex-col justify-center items-center text-center w-full h-full">
                <h1 className="text-5xl uppercase font-semibold text-white mb-6 cursor-default">
                    Bài thi sát hạch lái xe A1
                </h1>
                <button
                    className="button uppercase rounded px-10 py-3 text-xl font-semibold"
                    onClick={startQuiz}
                >
                    Bắt đầu
                </button>
            </div>
        </section>
    );
}

export default Start;
