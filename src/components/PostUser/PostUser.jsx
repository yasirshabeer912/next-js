import Image from 'next/image';
import React from 'react'
import styles from './postUser.module.css'
import { findUser } from '@/libs/data';
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache:'no-store' });
//     return res.json()

// }
const PostUser = async ({ userId }) => {
    console.log('userid ',userId);
    const user = await findUser(userId)
    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src="/noavatar.png"
                alt=""
                width={50}
                height={50}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.name}</span>
            </div>
        </div>
    )
}

export default PostUser
