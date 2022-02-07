import "./Modal.css";
import "animate.css";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container " onClick={handleModalContainerClick}>
        <button
          onClick={closeModal}
          className="modal-close  btn btn-danger animate__animated animate__rubberBand"
        >
          {" "}
          Cerrar
        </button>

        {children}
      </div>
    </article>
  );
};

export default Modal;
