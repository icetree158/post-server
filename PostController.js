import Post from './Post.js'
import PostService from './PostService.js'


class PostController {
    async create(req, res) {
        try {
          
            const post = await PostService.create(req.body, req.files.picture)
            
            return res.json(post)
        } catch (e) {
            res.status(501).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {

            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const undateedPost = await PostController.update(req.body)
            return res.json(undateedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(true)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();