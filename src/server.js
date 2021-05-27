const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const phonesList = require("./phones.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000"
		],
	})
);

//Phones list server route.
app.get("/api/phones", (req, res) => {
	res.send({ phonesList });
});

// catch 404
app.use((req, res) => {
	return res.status(404).json({ message: "Not found" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
