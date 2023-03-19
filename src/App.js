import { Button } from "react-bootstrap";
import ContentComponent from "./Components/ContentComponent";
import CurvedComponent from "./Components/CurvedComponent";
import Footer from "./Components/Footer";
import ImageComponent from "./Components/ImageComponent";
import ServicesComponent from "./Components/ServicesComponent";
import TitleComponent from "./Components/TitleComponent";

function App() {
  return (
      <div className="mt-4">
        <TitleComponent/>
        <ImageComponent/>
        <CurvedComponent/>
        <ContentComponent/>
        <ServicesComponent/>
        <Footer/>
      </div>
      

  );
}

export default App;
