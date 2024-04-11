import Articles from "./components/Articles";
import ClientsInfo from "./components/ClientsInfo";
import ClientsReviews from "./components/ClientsReviews";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FormToAplication from "./components/FormToAplication";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Content />
      <ClientsInfo />
      <ClientsReviews />
      <Tech />
      <Articles />
      <FormToAplication />
      <Footer /> */}
      <AboutCompany />
    </div>
  );
}

export default App;
