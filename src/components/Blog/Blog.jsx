import PropTypes from "prop-types";
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    posted_date,
    author,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div>
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <IoBookmarkSharp></IoBookmarkSharp>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((has, idx) => (
          <span key={idx}>
            <a href="">#{has}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
