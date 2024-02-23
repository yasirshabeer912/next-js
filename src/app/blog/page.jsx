import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/libs/data";


// const getData = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}});
//   return res.json()

// }
const BlogPage = async () => {
    const posts = await getPosts()
    console.log(posts);
  return (
    <div className={styles.container}>
        {posts.map((post)=>(
            <div className={styles.post} >
            <PostCard post={post} />
          </div>
        ))}
        
    </div>
  );
};

export default BlogPage;