import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./routes/homepage";
import "./scss/main.scss";

function App() {
  return ( 
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
