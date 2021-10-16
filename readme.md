# query  {
#   getAllPosts {
#     id
#     title
#     description
#   }
# }

# query  {
#   getPost(id:"616acae4c4aa5447f8e7ffab") {
#     title
#     description
#   }
# }

# mutation {
#   deletePost(id: "616acb16ad0c8e6d37cd3e97")
# }

# mutation {
#   updatePost(id: "616acae4c4aa5447f8e7ffab", post: {
#     title: "new Title"
#     description: "this is new desciption"
#   }){
#     id
#     title
#     description
#   }
# }

# mutation {
#   updatePost(id: "616acae4c4aa5447f8e7ffab", post: {
#     title: "hi its upadted",
#     description: "updated description"
#   }) {
#     id
#     title
#     description
#   }
# }