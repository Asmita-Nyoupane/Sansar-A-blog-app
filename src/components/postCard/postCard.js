import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1711348787246-5125ca266e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <span>01-02-2000</span>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          voluptate harum suscipit tempora adipisci deleniti excepturi vero
          maiores tenetur necessitatibus!
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
