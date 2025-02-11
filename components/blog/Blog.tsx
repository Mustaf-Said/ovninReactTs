import data from "../blog/blog.json";

type DataInfo = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

function Blog() {
  return (
    <div className="blogs">
      <section className="blog1">
        {data.map((obj: DataInfo) => (
          <div key={obj.id}>
            <h3>Title: {obj.title}</h3>
            <img src={obj.cover} alt="img" />
            <p>Auther: {obj.author}</p>
          </div>
        ))}
      </section>
      {/*  <section className="blog2"></section> */}
    </div>
  );
}

export default Blog;
