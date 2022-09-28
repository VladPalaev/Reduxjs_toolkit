const { Router } = require("express");
const postsController = require('../controllers/postsContoller');


const router = Router();

router.get('', postsController.getAllPosts);


module.exports = router;