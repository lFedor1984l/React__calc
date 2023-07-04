import React, { useState } from "react";
import './App.css';
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import * as math from 'mathjs';




function App() {

	const [enter, setEnter] = useState('');
	const [result, setResult] = useState('');

	const addNum = (val) => {
		setEnter((enter) => [...enter, val + ' ']);
	};

	const calcResult = () => {
		let enterNum = enter.join('')
		setResult(math.evaluate(enterNum))
	}

	const clearInput = () => {
		setEnter('');
		setResult('');
	};

	return (
		<div className="container">
			<div className="wrapper">
				<div className="inner">
					<Input enter={enter} result={result} />
					<div className="row">
						<Button symbol='7' hendleClick={addNum} />
						<Button symbol='8' hendleClick={addNum}/>
						<Button symbol='9' hendleClick={addNum}/>
						<Button symbol='/' hendleClick={addNum}/>
					</div>
					<div className="row">
						<Button symbol='4' hendleClick={addNum}/>
						<Button symbol='5' hendleClick={addNum}/>
						<Button symbol='6' hendleClick={addNum}/>
						<Button symbol='*' hendleClick={addNum}/>
					</div>
					<div className="row">
						<Button symbol='1' hendleClick={addNum}/>
						<Button symbol='2' hendleClick={addNum}/>
						<Button symbol='3' hendleClick={addNum}/>
						<Button symbol='+' hendleClick={addNum}/>
					</div>
					<div className="row">
						<Button symbol='0' hendleClick={addNum}/>
						<Button symbol='.' hendleClick={addNum}/>
						<Button symbol='=' hendleClick={calcResult}/>
						<Button symbol='-' hendleClick={addNum}/>
					</div>
					<Button symbol='CLEAR' hendleClick={clearInput}/>
				</div>
			</div>
		</div>
	)
}

export default App;