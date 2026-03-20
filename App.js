import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Footer from "./src/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Us Page</h1>;
const Cart = () => <h1>Cart Page</h1>;

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>,
);
