import { Routes, Route } from "react-router-dom";
import './App.css';
import Logo from "./components/Logo";
import Users from "./assets/Routes/Users";
import UserInfo from "./assets/Routes/UserInfo";



function App() {
  return (
    <>
    <div className="min-h-screen flex justify-center">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/:name" element={<UserInfo />}/>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
