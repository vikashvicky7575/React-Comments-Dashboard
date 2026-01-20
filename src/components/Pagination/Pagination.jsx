import React from 'react';
import styles from "./Pagination.module.css";

// paasing the data using props
const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <>
      <div className={styles.pagination}>
        {/* Previous Button */}
        <button onClick={onPrev} disabled={currentPage === 1}>  ◀ </button>

        {/* Showing CurrentPage & TotalPagesCount */}
        <span>
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        <button onClick={onNext} disabled={currentPage === totalPages}>▶</button>

      </div>
    </>
  )
}

export default Pagination