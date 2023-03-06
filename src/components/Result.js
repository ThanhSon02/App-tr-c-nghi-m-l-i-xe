function Result({ showResult, startOver, showAns }) {
    return (
        <section
            className="bg-slate-700 h-screen justify-center items-center"
            style={{ display: `${showResult ? "flex" : "none"}` }}
        >
            <div className="bg-slate-100 h-2/5 w-4/5 container rounded flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-neutral-900 mb-6">
                    Kết quả
                </h1>
                <div>
                    <h2>Điểm:</h2>
                    <h3>Thời gian hoàn thành:</h3>
                </div>
                <div className="flex gap-96">
                    <button
                        className="bg-lime-800 rounded px-8 py-2 text-base"
                        onClick={showAns}
                    >
                        Check your answer
                    </button>

                    <button
                        className="bg-lime-800 rounded px-8 py-2 text-base"
                        onClick={showAns}
                    >
                        Try again
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Result;
