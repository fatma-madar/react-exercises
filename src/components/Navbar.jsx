import { NavLink } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';
import '../styles/navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <NavLink to="/" end>الملف الشخصي</NavLink>
      <NavLink to="/cart">سلة المشتريات</NavLink>
      <NavLink to="/todo">قائمة المهام</NavLink>
      <NavLink to="/users">دليل المستخدمين</NavLink>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;