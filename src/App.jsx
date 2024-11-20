import "./App.css";
import Post from "./components/Post";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Post author="Evelyn Hill" message="Test"></Post>
    </>
  );
}

export default App;
