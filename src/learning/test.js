const http = require('http');

// promise is an object returned by an asynchronous function 

/*
const myPromise = new Promise((resolve, reject) => {
	// heavy work 

	setTimeout(() => {
		let a = 1;
		if (a === 0)
			resolve(`success`);
		else
			reject(`type of error`);
	}, 1000);
});


myPromise.then((msg) => {
	console.log(msg);
}).catch((err) => {
	console.log(err);
});


console.log(`keep working`);
*/
/*
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');


Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then((responses) => {
	for (const resp of responses)
		console.log(resp.url);
}).catch((err) => {
	console.log(`error`);
});*/

/*
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3]).then((msg) => {
	console.log(`first: ${msg.url}`);
}).catch((err) => {
	console.log(`error none of the is valid`);
}); */

/*
async function fetchProducts() {
	try {
		const resposne = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
		const data = await resposne.json();
		console.log(data[0].name);
	} catch (err) 
	{
		console.log(err);
	}
}

fetchProducts();

console.log(`continue working ...`); */

// return from async function


/*
async function fetchProducts() {
	try {
		const resposne = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
		const data = await resposne.json();
		return data;
	} catch (err) 
	{
		console.log(err);
	}
}

// since async function always return promise with data that you have returned from it we can do this

const fetpromise = fetchProducts();
// we did not use await because it only can be used inside async function
fetpromise.then((data) => {
	console.log(data[0].name);
});
*/
/*
const server = http.createServer();

server.on('request', (req, res) => {
	res.end(`welecome to out page`);
});

server.listen(4000);*/

/*
// create a big file
const {writeFileSync} = require('fs');

for (let i = 0; i < 1000000; ++i)
{
	writeFileSync('./content/big.txt', `hello, world ${i}`, {flag: 'a'});
}*/