import data from "../blog/blog.json";
import "../../scss/blog.scss";

type DataInfo = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

function Blog() {
  return (
    <div className="blogs">
      {data.map((obj: DataInfo) => (
        <div key={obj.id}>
          <h3>Title: {obj.title}</h3>
          <img src={obj.cover} alt="img" />
          <p>Auther: {obj.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
