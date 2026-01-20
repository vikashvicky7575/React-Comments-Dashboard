import { useState, useEffect, useMemo } from "react";
import styles from "./App.module.css";

//servicesFetchApi
import { fetchComments } from "./services/commentService";

//components
import CommentList from "./components/CommentList/CommentList";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentForm from "./components/CommentForm/CommentForm";

//pagination page data count
const Comments_Per_Page = 10;

function App() {

  //useState for state Changes
  const [comments, setComments] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Loading Comments & Local Storage
  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const apiComments = await fetchComments();

        const localComments = JSON.parse(localStorage.getItem("newComments")) || [];

        setComments([...localComments, ...apiComments]);
      } catch (err) {
        setError("Failed to load comments");
      } finally {
        setLoading(false);
      }
    }
    loadComments()
  }, [])

  //Search filter
  const filteredComments = useMemo(() => {
    return comments.filter(
      (comment) =>
        comment.name.toLowerCase().includes(searchText.toLowerCase()) ||
        comment.email.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [comments, searchText]);

  // pagination logic
  const totalPages = Math.ceil(filteredComments.length / Comments_Per_Page);

  const paginatedComments = useMemo(() => {
    const startIndex = (currentPage - 1) * Comments_Per_Page;
    return filteredComments.slice(
      startIndex,
      startIndex + Comments_Per_Page
    );
  }, [filteredComments, currentPage]);

  //Add New Comment
  const addCommentHandler = (newComment) => {
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);

    const storedComments =
      JSON.parse(localStorage.getItem("newComments")) || [];
    localStorage.setItem(
      "newComments",
      JSON.stringify([newComment, ...storedComments])
    );

    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.container}>

        <h1>React Comments Application</h1>

        {/* commentForm component and passing the Props */}
        <CommentForm onAddComment={addCommentHandler} />

        {/* SearchBar component and passing the Props */}
        <SearchBar searchText={searchText} onSearch={setSearchText} />

        {/* loading and error some case any api issue or network */}
        {loading && <p>Loading comments...</p>}
        {error && <p className={styles.error}>{error}</p>}


        {!loading && !error && (
          <>

            {/* SearchBar component and passing the Props */}
            <CommentList comments={paginatedComments} />

            {/* Pagination component and passing the Props */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={() => setCurrentPage((p) => p + 1)}
              onPrev={() => setCurrentPage((p) => p - 1)}
            />

          </>
        )

        }
      </div>
    </>
  );
}

export default App;
