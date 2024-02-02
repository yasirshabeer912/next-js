import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='/contact.png' alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>0000-00-00</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Bodysdsds</p>
                <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard