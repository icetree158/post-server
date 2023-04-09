import Post from "./Post.js"
import FileService from "./fileService.js";


class PostService {
    async create(post, picture) {
        const filename = FileService.saveFile(picture)
    
        const createdPost = await Post.create({ ...post, picture: filename });
        return createdPost
    }
    async getAll() {
        const posts = await Post.find()
        return posts

    }

    async getOne(id) {
        if (!id) {
            throw new Error("no ID")
        }
        const post = await Post.findById(id)
        return post
    }
    async update(post) {

        if (!post._id) {
            throw new Error("no ID")
        }
        const undateedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return undateedPost


    }
    async delete(id) {
        if (!id) {
            throw new Error("no ID")
        }
        const post = await Post.findByIdAndDelete(id)
        return post



    }
}
export default new PostService();