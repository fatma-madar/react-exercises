import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import TodoList from './components/TodoList';
import UsersDirectory from './components/UsersDirectory';
import './App.css';

function App() {
    const { theme } = useTheme();

  return (
        <div className={`app-container ${theme}`}>

      <Navbar />

      <div className="app">
        <Routes>
          {/* الصفحة الرئيسية = الملف الشخصي */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <CartItem productName="لابتوب" price={1200} />
                <CartItem productName="سماعة" price={150} />
              </>
            }
          />

          <Route path="/todo" element={<TodoList />} />
          <Route path="/users" element={<UsersDirectory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;