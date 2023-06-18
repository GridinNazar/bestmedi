import React from "react"
import "./Modal.scss"

const Modal = ({ active, setActive, searcHandler, children}) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
			{active ? (
        <button
          className="searchingButton modal"
          type="submit"
          onClick={(e) => searcHandler(e)}
        >
          Найти
        </button>
      ) : (
        <></>
      )}
		</div>
	)
};

export default Modal;
