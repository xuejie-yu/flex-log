import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(process.env);

fetch("/port")
	.then(res => res.json())
	.then(data => {
		ReactDOM.render(<App port={data.port}/>, document.getElementById('root'));
	});

