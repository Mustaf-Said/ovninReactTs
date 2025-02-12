import Blog from "../blog/Blog";
import "../../scss/blog.scss";
import data from "../blog/fruits.json";

interface getFruits {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}
function Main() {
  return (
    <div>
      <div>
        <Blog />
      </div>
      <div className="fruits">
        {data.map((items: getFruits) => (
          <div key={items.name}>
            <h3>{items.category}</h3>
            <h6>{items.name}</h6>
            <p>{items.stocked ? "In stock" : "Out of stock"}</p>
            <p>{items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
