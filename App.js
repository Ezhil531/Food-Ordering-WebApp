import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
};

export default App;

const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppLayout} />);
