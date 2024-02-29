import { Post } from "./models";
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
    const post = await Post.find({slug}) 
    return post;
}

export const findUser = async (id)=>{
    const user = Post.find({id});
    console.log('user', user);
    return user;
}
