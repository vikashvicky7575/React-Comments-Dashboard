import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onAddComment }) => {
  
  // State to manage comment form inputs name,email,body
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  })

  const [error, setError] = useState("");

  // changeHandler for input onChange
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // submitHandler for onSubmit
  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.body) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format");
      return;
    }

    const newComment = {
      id: Date.now(),
      ...formData,
    };

    onAddComment(newComment);
    setFormData({ name: "", email: "", body: "" });
    setError("");
  }
  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <h3>Add Comment</h3>

        {error && <p className={styles.error}>{error}</p>}

        {/* Name Input Block */}
        <div className={styles.field}>
          <label>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>

        {/* Email Input Block */}
        <div className={styles.field}>
          <label>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>

        {/* Comment Input Block */}
        <div className={styles.field}>
          <label>
            Comment <span className={styles.required}>*</span>
          </label>
          <textarea
            name="body"
            placeholder="Write your comment"
            value={formData.body}
            onChange={changeHandler}
          />
        </div>

        {/* Submit Button*/}
        <button type="submit">Add</button>

      </form>
    </>
  )
}

export default CommentForm