import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import PictureCard from "./Components/PictureCard/PictureCard";
import HomeTopContainer from "./Components/HomeTopContainer/HomeTopContainer";
import dot from "./assets/images/Dot grid.png";
import TextCard from "./Components/TextCard/TextCard";
import StatSummary from "./Components/StatSummary";
import FAQ from "./Components/FAQ/FAQ";
import ProductDescription from "./Components/ProductDescription";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="dotted-background">
          <HomeTopContainer />
          <PictureCard />
        </div>
        <StatSummary />
        <ProductDescription />
        <FAQ />
        <TextCard
          title="Still have questions?"
          text="Can’t find the answer you’re looking for? Please chat to our friendly team."
          btnText="Get in touch"
        />
        <TextCard
          title="Join our careers newsletter"
          text="Be the first to know when new mentor joins us."
          btnText="Subscribe"
          placeholder="Enter your email"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
