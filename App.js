import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantDetail from "./src/components/RestaurantDetail";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppLayout} />);
