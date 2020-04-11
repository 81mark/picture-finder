const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
	try {
		const searchWord = `${req.query.q}`;
		const page = `${req.query.p}`;

		const results = await axios.get(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchWord}&image_type=photo&page=${page}`
		);

		const images = await results.data;

		return res.json({
			success: true,
			images,
		});
	} catch (err) {
		return res.json({
			success: false,
			message: `Error with status of ${err.response.status}`,
		});
	}
});

module.exports = router;
