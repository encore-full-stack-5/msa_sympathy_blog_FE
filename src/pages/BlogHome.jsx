import { Link } from "react-router-dom";
import Post from "../components/Post";

const BlogHome = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/">메인</Link>
          <br />
          <Link to="/createPost">글쓰기</Link>
        </div>
        <h1>{localStorage.getItem("blogName")}</h1>
        <hr />
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default BlogHome;
