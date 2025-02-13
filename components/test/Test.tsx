import "../../scss/test.scss";

type Todo = {
  item: string;
  count: number;
  status: boolean;
};

type TestProps = {
  list: Todo[];
};

export default function Test({ list }: TestProps) {
  return (
    <div className="test">
      {list.map((obj) => (
        <ul key={obj.item}>
          <li>
            <span>Item:</span> {obj.item}
          </li>
          <li>
            <span>Count: </span>
            {obj.count}
          </li>
          <li>
            <span>Status: </span>
            {obj.status ? "Completed" : "Pending"}
          </li>
        </ul>
      ))}
    </div>
  );
}
