import "./../scss/app.scss";
/* import Main from "../components/main/Main"; */
import Nav from "../components/Navbar/Nav";
import V7Fr from "../components/ovn/V7Fr";
/* import TodoList from "../components/ovn/V7On"; */
/* const orderList = [
  { item: "Coffe", count: 21, status: true },
  { item: "Cocacola", count: 11, status: false },
  { item: "Choclete", count: 7, status: true },
]; */

function App() {
  return (
    <div className="divApp">
      <Nav />
      <V7Fr></V7Fr>
      {/*   <Main /> */}
      {/*    <TodoList list={orderList} /> */}
    </div>
  );
}

export default App;
