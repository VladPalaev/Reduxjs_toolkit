const express = require('express');
const config = require('config');


const PORT = config.get("port") ?? 4200;
const app = express();

app.use(express.json());

app.use('/api/posts', require('./routes/postsRouter'));

async function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Server is working on port ${PORT}`)
		})
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

start();