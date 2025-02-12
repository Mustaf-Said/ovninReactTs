import Main from "../components/main/Main";
import Nav from "../components/Navbar/Nav";
import Test from "../components/test/Test";
import "./../scss/app.scss";
function App() {
  return (
    <div className="divApp">
      <Nav />
      <Main />
      <Test />
    </div>
  );
}

export default App;
