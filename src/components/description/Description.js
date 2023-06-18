import React from "react"
import "./Description.scss"
import symbol from "../../assets/klizma.svg"

const Description = () => {
	return (
		<div className='description'>
			<span className='text'>Поиск лучших цен на анализы</span>
			<img className='klizma' src={symbol}/>
		</div>
	)
};

export default Description;
