"use client";
import React, { useState } from "react";

const CounterWidget = () => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="bg-white p-4 shadow-lg w-fit rounded-lg m-4">
			<p>Count: {count}</p>
			<button className="border" onClick={incrementCount}>Increment</button>
		</div>
	);
};

export default CounterWidget;
