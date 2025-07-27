import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Layout;
