const Post = require("./models/post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
    getPost: async (parant, { id }, context, info) => {
      const post = await Post.findById(id);
      return post;
    },
  },
  Mutation: {
    createPost: async (parent, args, context) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
    deletePost: async (parent, args, context) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Ok post is deleted";
    },
    updatePost: async (parent, args, context) => {
      const { id } = args;
      const { title, description } = args.post;

      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },
  },
};

module.exports = {
  resolvers,
};
