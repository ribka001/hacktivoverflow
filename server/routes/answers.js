var express = require('express');
var router = express.Router();
const answerController = require('../controllers/answerController')
const { isLogin } = require('../middlewares/isLogin')

router.post('/:id', isLogin, answerController.createAnswer);
router.get('/', answerController.readAnswer);
router.put('/:id', isLogin, answerController.editAnswer);
router.put('/upvote/:id', isLogin, answerController.upVoteAnswer)
router.put('/downvote/:id', isLogin, answerController.downVoteAnswer)

module.exports = router;