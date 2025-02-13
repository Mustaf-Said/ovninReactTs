import "../../scss/test.scss";

export default function Test() {
  return (
    <div className="test">
      <h3>React & TypeScript</h3>
    </div>
  );
}
/* 
type toDo = {
  item: string;
  count: number;
  status: boolean;
};

type Items = {
  list: toDo[];
};
export default function TodoList({ list }: Items) {
  return (
    <>
      <div>
        {list.map((obj) => (
          <ul key={obj.item}>
            <li>
              <span>Item:</span>
              {obj.item}
            </li>
            <li>
              <span>Count:</span>
              {obj.count}
            </li>
            <li>
              <span>Status:</span>
              {obj.status ? "Complete" : "Wait"}
            </li>
          </ul>
        ))}
      </div>
      <Test />
    </>
  );
}
 */