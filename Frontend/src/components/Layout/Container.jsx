import { Header, Footer } from "../index.js";
import { Outlet } from 'react-router-dom'

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Container;
