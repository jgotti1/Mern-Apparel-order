import AdminPage from "./components/adminPage/adminPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
// import Nav from "./components/navBar/navBar";
import OrderPage from "./components/orderPage/orderPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { useLogout } from "./hooks/useLogout";

function App() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        {user && (
          <div className="email">
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        <div className="routes">
          <Routes>
            {user && user.email === "apparel@apparel.com" && <Route path="/" element={user && user.email === "apparel@apparel.com" ? <HomePage /> : <Navigate to="/login" />} />}
            {user && user.email === "ADMIN@apparel.com" && <Route path="/" element={user && user.email === "ADMIN@apparel.com" ? <AdminPage /> : <Navigate to="/login" />} />}
            {!user && <Route path="/" element={<Login />} />}
            <Route path="/order" element={user ? <OrderPage /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            {/* actiavte to create a new user */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
