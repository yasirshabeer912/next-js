import { Post, User } from "./models";
import { connectToDb } from "./utils";

const users= [
    {id:1,name:'Yasir'},
    {id:2,name:'Bilal'}
]





export const getPosts = async ()=>{
    connectToDb();
    const posts = await Post.find();
    console.log(posts);
    return posts;
}

export const singlePost = async(slug)=>{
    const post = await Post.findOne({slug}) 
    return post;
}

export const findUser = async (id)=>{
    const user = User.findById(id);
    // console.log('user', user);
    return user;
}
export const AllUsers = async (id)=>{
    const users = User.find();
    // console.log('user', users);
    return users;
}
