import React, { FC, ChangeEvent, useState} from "react";
import "./OrderItem.css";

const arr = [
];

function OrderItem() {
	const [count1, setCount1] = React.useState(1);
	const [count2, setCount2] = React.useState(1);
	const price1 = 299;
	const price2 = 274;
	const summ1 = price1*count1;
	const summ2 = price2*count2;

	const plus1 = () => {
		setCount1(count1 + 1);
	};

	const minus1 = () => {
		if(count1>1){
			setCount1(count1 - 1);
		}
	};

	const plus2 = () => {
		setCount2(count2 + 1);
	};

	const minus2 = () => {
		if(count2>1){
			setCount2(count2 - 1);
		}
	};

		return (
			<div className="OrderItem">
					<hr></hr>
					<div className="OrderItemDocher">
						<div className="Description Shaurma">
							<h3>Шаурма 4 сыра</h3>
							<p>Лаваш, сыр Моцарелла, сыр Горгонзола, сыр Сулугуни, Копчёный сыр, томаты Черри, запечённый кабачок, кунжутный соус</p>
						</div>
						<div className="Counter">
							<div>
								<button id="Minus" onClick={minus1}>-</button>
								<div id="Count">{count1}</div>
								<button id="Plus" onClick={plus1}>+</button>
							</div>
							<div id="Summ">{summ1}</div>
							<div id="Delete">X</div>
						</div>
					</div>
						
					<div className="OrderItemDocher">
						<div className="Description Shaurma">
							<h3>Шаурма 4 сыра</h3>
							<p>Лаваш, сыр Моцарелла, сыр Горгонзола, сыр Сулугуни, Копчёный сыр, томаты Черри, запечённый кабачок, кунжутный соус</p>
						</div>
						<div className="Counter">
							<div>
								<button id="Minus" onClick={minus2}>-</button>
								<div id="Count">{count2}</div>
								<button id="Plus" onClick={plus2}>+</button>
							</div>
							<div id="Summ">{summ2}</div>
							<div id="Delete">X</div>
						</div>
					</div>
			</div>

		);
}

export default OrderItem;