import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/PostUser/PostUser";
import PostUserSkeletion from "@/components/PostUser/PostUserSkeleton/PostUserSkeletion";
import { singlePost } from "@/libs/data";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } });
//   return res.json()

// }

const SinglePostPage = async ({ params }) => {
  const { slug } = params
  const post = await singlePost(slug)
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div><PostUserSkeletion/></div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              02/02/2024
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure vero nulla dolores delectus esse quae ut, nihil fugit, excepturi itaque. Vitae nostrum, consectetur eos possimus eum eius voluptas dolor.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;