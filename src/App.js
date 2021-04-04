import "./App.prefixed.css";
import Header from "./layout/Header";
import Tracking from "./layout/Tracking";
import Access from "./layout/Access";
import Tools from "./layout/Tools";
import Outro from "./layout/Outro";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Tracking />
        <Access />
        <Tools />
        <Outro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
