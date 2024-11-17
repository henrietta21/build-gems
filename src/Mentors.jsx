import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import PictureCard from "./Components/PictureCard/PictureCard";
import SearchInput from "./Components/SearchInput/SearchInput";
import Filter from "./Components/Filter";

function Mentors() {
  return (
    <div className="App">
      <Nav />
      <div className="main mx-auto section pt-5">
        <SearchInput
          placeholder="Search by name, role, company or school"
          input="search"
        />
        <div className="main d-flex gap-1 my-5">
          <Filter />
          <div className="col-md-9">
            <PictureCard rows="3" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mentors;
