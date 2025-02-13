import "./../scss/app.scss";
import Main from "../components/main/Main";
import Nav from "../components/Navbar/Nav";
import Test from "../components/test/Test";

function App() {
  const orderList = [
    { item: "Coffe", count: 21, status: true },
    { item: "Cocacola", count: 11, status: false },
    { item: "Choclete", count: 7, status: true },
  ];
  return (
    <div className="divApp">
      <Nav />
      <Main />
      <Test list={orderList} />
    </div>
  );
}

export default App;
