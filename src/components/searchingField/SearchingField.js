import React, { useState } from "react"
import "./SearchingField.scss"
import Modal from './Modal';

const SearchingField = ({ found, setFound}) => {
	const [modalActive, setModalActive] = useState(false)

	const searcHandler = (e) => {
		e.preventDefault();
		setModalActive(false)
		setFound(true)
	}

	return (
    <form>
      <div className="searchingField">
        <span className="material-symbols-outlined search-symbol">search</span>
        <input className="input"></input>
        <div className="filters" onClick={() => setModalActive(true)}>
          <span className="material-symbols-outlined">tune</span>
        </div>
      </div>
      <button
        className={modalActive ? "searchingButton hidden" : "searchingButton"}
        type="submit"
        onClick={(e) => searcHandler(e)}
      >
        Найти
      </button>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        searcHandler={searcHandler}
      >
        <div className="price">
          <span>Цена</span>
          <span>
            <span>
              От <input />
            </span>
            <span>
              До <input />
            </span>
          </span>
        </div>
        <div className="metro">
          <span>Метро</span>
          <span>
            <select id="metro">
              <option>Чернышевская</option>
              <option>Владимирская</option>
              <option>Горьковская</option>
            </select>
          </span>
        </div>
        <div className="system">
          <span>Система</span>
          <span>
            <select id="system">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </span>
        </div>
        <div className="organ">
          <span>Орган</span>
          <span>
            <select id="organ">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </span>
        </div>
        <div className="disease">
          <span>Болезнь</span>
          <span>
            <select id="disease">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </span>
        </div>
      </Modal>
    </form>
  );
};

export default SearchingField;
