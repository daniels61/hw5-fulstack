import './App.css';
import AboutMe from './pages/AboueMe';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import NewPost from './pages/NewPost';
import Login from './pages/Login';
import PostPage from './pages/PostPage';







function App() {
  return (
    <>
    {/* Routes nest inside one another. Nested route paths build upon
          parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. */}
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<AboutMe/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="new_post" element={<NewPost/>} />
        <Route path="post_page" element={<PostPage/>} />

        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  </>
  );
}



export default App;
