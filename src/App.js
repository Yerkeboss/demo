import $ from "jquery";
import "../src/App.scss";
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useHistory, Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../../../GlobalContext';
import { db } from '../../../firebase';

function App() {
	const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
	const [result, setResult] = useState("");

	const handleChange1 = (e) => {
		setName(e.target.value);
	};

  const handleChange2 = (e) => {
    setMobile(e.target.value);
	};

  const handleChange3 = (e) => {
    setEmail(e.target.value);
	};


	const handleSumbit = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setResult(data);
			},
		});
	};

	return (
		<div className="App">
      {/* <div className = "answer"> */}
			<form
				action="http://localhost:8000/server.php"
				method="post"
				onSubmit={(event) => handleSumbit(event)}
			>
      
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(event) => handleChange1(event)}
				/>
				<br />
        <label htmlFor="name">Mobile number: </label>
				<input
					type="text"
					id="mobile"
					name="mobile"
					value={mobile}
					onChange={(event) => handleChange2(event)}
				/>
				<br />
        <label htmlFor="name">Email: </label>
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={(event) => handleChange3(event)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<h1>{result}</h1>
		</div>
	);
}

export default App;
