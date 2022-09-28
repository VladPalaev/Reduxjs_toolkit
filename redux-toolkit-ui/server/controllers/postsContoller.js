const db = [
	{id: 1, text: 'Hello'},
	{id: 2, text: 'Good paper!'},
	{id: 3, text: 'good buy'},
	{id: 4, text: 'buy'},
];

class PostsController {
	async getAllPosts(req, res) {
		try {
			res.status(200).json(db);
		} catch (error) {
			res.status(500).json({message: error.message})
		}
	}
}

module.exports = new PostsController();