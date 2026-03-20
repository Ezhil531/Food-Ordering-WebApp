import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Footer from "./src/components/Footer";

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
root.render(<App />);
