import React, { useState } from "react";
import "./App.css";

function App() {
	const [pixel, setPixel] = useState(0);
	const [rem, setRem] = useState(0);
	return (
		<div className="app">
			<div className="header">
				<h1>PX To REM Converter</h1>
			</div>
			<div className="conversion">
				<div className="value">
					<form action="" className="form">
						<input
							type="text"
							name="px"
							placeholder="PX"
							onChange={(e) => {
								setPixel(e.target.value);
								setRem((e.target.value / 16).toFixed(2));
							}}
						/>
					</form>
				</div>
				<div className="answer">
					<p>{rem} REM</p>
				</div>
			</div>
		</div>
	);
}

export default App;
