const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

router.route('/pizzaId/:commentId').post(addComment);

router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;