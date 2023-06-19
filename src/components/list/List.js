import React from "react"
import './List.scss'

const list = [
{labName: "Лаборатория 1", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 2", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 3", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 4", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 5", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 6", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 7", analysName: "Название анализа", price: "Цена"},
{labName: "Лаборатория 8", analysName: "Название анализа", price: "Цена"}]

const List = () => {
	return (
    <div className="list">
      {/* <div className="list-item popular">
        <div className="lab">
          <span className="lab-name">Лаборатория 1</span>
          <div class="rating">
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span></span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="analys-name">Название анализа</div>
        <div className="price">Цена</div>
      </div>
      <div className="list-item cheapest">
        <div className="lab">
          <span className="lab-name">Лаборатория 2</span>
          <div class="rating">
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span></span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="analys-name">Название анализа</div>
        <div className="price">Цена</div>
      </div>
      <div className="list-item near">
        <div className="lab">
          <span className="lab-name">Лаборатория 3</span>
          <div class="rating">
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span></span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="analys-name">Название анализа</div>
        <div className="price">Цена</div>
      </div> */}
      {list.map((item, index) => {
        return (
          <div className="list-item">
						{index === 0 ? <div className='highlight most-popular'>Самый популярный</div> : <></>}
						{index === 1 ? <div className='highlight cheapest'>Самый дешевый</div> : <></>}
						{index === 2 ? <div className='highlight near'>Рядом с вами</div> : <></>}
            <div className="lab">
              <span className="lab-name">{item.labName}</span>
              <div class="rating">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
              </div>
            </div>
            <div className="bar"></div>
            <div className="analys-name">{item.analysName}</div>
            <div className="price">{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
