const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers')

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/posts', controllers.getPosts)
router.get('/post/:id', controllers.getPost)
router.post('/post', restrict, controllers.createPost)
router.put('/post/:id', restrict, controllers.updatePost)
router.delete('/post/:id', restrict, controllers.deletePost)

module.exports = router