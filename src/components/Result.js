function Result({ showResult, startOver }) {
    return (
        <section
            className="bg-slate-700"
            style={{ display: `${showResult ? "block" : "none"}` }}
        >
            <div className="container flex flex-col justify-center items-center text-center w-full h-full">
                <h1 className="text-3xl font-semibold text-slate-200 mb-6">
                    Thi GPLX A1
                </h1>
                <button
                    className="bg-slate-50 rounded px-8 py-2 text-base"
                    onClick={startOver}
                >
                    Kết quả
                </button>
            </div>
        </section>
    );
}

export default Result;
