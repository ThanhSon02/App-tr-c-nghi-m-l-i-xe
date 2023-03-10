import "../App.css";
function Modal({ children, showModal }) {
    return (
        <div className={showModal ? "modal flex" : "modal hidden"}>
            {children}
        </div>
    );
}

export default Modal;
