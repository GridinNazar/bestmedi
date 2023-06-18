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
		<div className='list'>
			{list.map((item, index) => {
				return (
          <div className="list-item">
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
						<div className='bar'></div>
            <div className="analys-name">{item.analysName}</div>
            <div className="price">{item.price}</div>
          </div>
        );
			})}
		</div>
  );
};

export default List;
