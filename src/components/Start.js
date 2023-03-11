import '../App.css'
function Start({ startQuiz }) {
    return (
        <section className="bg-secondary h-screen">
            <div className="flex flex-col justify-center items-center text-center w-full h-full">
                <h1 className="md:text-5xl text-3xl mx-10 uppercase font-semibold text-white mb-6 cursor-default">
                    Bài thi sát hạch lái xe A1
                </h1>
                <button
                    className="button uppercase rounded lg:px-10 lg:py-3 px-5 py-2 text-lg lg:text-xl font-semibold"
                    onClick={startQuiz}
                >
                    Bắt đầu
                </button>
            </div>
        </section>
    );
}

export default Start;
