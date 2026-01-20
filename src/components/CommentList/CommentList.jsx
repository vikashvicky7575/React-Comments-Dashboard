import React from 'react';
import styles from './CommentList.module.css';

// paasing the data using props
const CommentList = ({ comments }) => {
    
    // if no comments showing
    if (comments.length === 0) {
        return <p>No comments found</p>;
    }

    return (
        <>
            <h2>Comment Lists</h2>
            <ul className={styles.list}>

                {/* showcase the data using map method */}
                {comments.map((comment) => (
                    <li key={comment.id} className={styles.item}>

                        <div className={styles.header}>
                            <h4 className={styles.name}>{`Name: ${comment.name}`}</h4>
                            <span className={styles.email}> <strong>Email: </strong>{comment.email}</span>
                        </div>

                        <p className={styles.comment}> <strong>Comment: </strong>{comment.body}</p>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default CommentList