import "./../scss/app.scss";
import Main from "../components/main/Main";
import Nav from "../components/Navbar/Nav";
/* import TodoList from "../components/test/Test"; */
/* const orderList = [
  { item: "Coffe", count: 21, status: true },
  { item: "Cocacola", count: 11, status: false },
  { item: "Choclete", count: 7, status: true },
]; */
function App() {
 
  return (
    <div className="divApp">
      <Nav />
      <Main />
   {/*    <TodoList list={orderList} /> */}
    </div>
  );
}

export default App;
