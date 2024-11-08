import React, { useContext, useEffect, useState } from 'react'
import Blog from './components/Blog';
import MyNavbar from './components/MyNavbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyLogin from './components/MyLogin';
import Dashboard from './components/Dashboard';
import MyRegister from './components/MyRegister';
import About from './components/About';
import { MyContext } from './context/MyProvider';

const App = () => {
  const {isDark,setIsDark}=useContext(MyContext);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <>
      <div className={`main-container ${isDark ? "dark-app" :""}`}>
      <MyNavbar currentUser={currentUser}/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/register" element={<MyRegister />} />
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/dashboard" />
            ) : (
              <MyLogin setCurrentUser={setCurrentUser} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            currentUser ? (
              <Dashboard setCurrentUser={setCurrentUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
  
      </div>
    </>
  )
}

export default App