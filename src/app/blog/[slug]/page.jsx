import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";



const SinglePostPage = async () => {

  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, repellendus sunt.
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure vero nulla dolores delectus esse quae ut, nihil fugit, excepturi itaque. Vitae nostrum, consectetur eos possimus eum eius voluptas dolor.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;