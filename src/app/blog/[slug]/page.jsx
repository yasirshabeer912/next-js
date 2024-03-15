import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/PostUser/PostUser";
import PostUserSkeletion from "@/components/PostUser/PostUserSkeleton/PostUserSkeletion";
import { singlePost } from "@/libs/data";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { next: { revalidate: 3600 } });
  return res.json()

}

const SinglePostPage = async ({ params }) => {
  const { slug } = params

  const post = await getData(slug);
  // const post = await singlePost(slug)
  console.log('post',post);
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src={post.image} alt="" fill className={styles.img} />
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
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;