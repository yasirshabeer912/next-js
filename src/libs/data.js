const users= [
    {id:1,name:'Yasir'},
    {id:2,name:'Bilal'}
]


const posts =[
    {id:1, title:'Post1', body:'---------', userId:1},
    {id:2, title:'Post2', body:'---------', userId:1},
    {id:3, title:'Post3', body:'---------', userId:1},
    {id:4, title:'Post4', body:'---------', userId:2},
    {id:5, title:'Post5', body:'---------', userId:2}
]


export const getPosts = async ()=>{
    return posts;
}

export const singlePost = async(id)=>{
    const post = posts.find((p) => p.id === parseInt(id)); 
    return post;
}

export const findUser = async (id)=>{
    const user = users.find((user) => user.id === parseInt(id));
    console.log('user', user);
    return user;
}
