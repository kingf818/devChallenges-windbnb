import React, { Component } from "react";
import queryString from "query-string";
import Searchbar from "./searchbar";
import BnbCard from "./bnbCard";
import SearchOverlay from "./searchOverlay";
import data from "../data/stays.json";
import logo from "../logo.svg";

class Home extends Component {
  state = {
    bnbList: [],
    city: "",
    adult: 0,
    child: 0,
    selection: "",
    editSearch: false,
  };

  componentDidMount() {
    const { city, adult, child } = queryString.parse(this.props.location.search);
    let querycity, queryadult, querychild;

    if (city === undefined) querycity = "";
    else querycity = city;

    if (adult === undefined) queryadult = 0;
    else queryadult = parseInt(adult);

    if (child === undefined) querychild = 0;
    else querychild = parseInt(child);

    let filterList = [...data];
    if (querycity !== "") {
      filterList = filterList.filter((bnb) => bnb.city.toLowerCase() === city.toLowerCase());
    }
    if (queryadult > 0 || querychild > 0) {
      const ttlguests = queryadult + querychild;
      filterList = filterList.filter((bnb) => bnb.maxGuests >= ttlguests);
    }

    this.setState({
      city: querycity,
      adult: queryadult,
      child: querychild,
      bnbList: filterList,
    });
  }

  renderPropertiesCard() {
    const { bnbList } = this.state;
    return bnbList.map((bnb) => <BnbCard key={bnbList.indexOf(bnb)} bnb={bnb} />);
  }

  handleOpenSearch = (type) => {
    //console.log(type);
    const { editSearch } = this.state;
    if (editSearch) this.setState({ editSearch: false });
    else this.setState({ editSearch: true, selection: type });
  };

  render() {
    const { city, adult, child, selection, bnbList, editSearch } = this.state;
    return (
      <React.Fragment>
        {editSearch ? (
          <SearchOverlay type={selection} defaultCity={city} defaultAdult={adult} defaultChild={child} onClick={this.handleOpenSearch} />
        ) : null}
        <nav>
          <div className="logo">
            <img src={logo} alt="windbnb-logo" />
          </div>
          <Searchbar city={city} adult={adult} child={child} onClick={this.handleOpenSearch} />
        </nav>

        <main role="main" className={editSearch ? "fixed" : ""}>
          <div className="pagetitle">
            <h1>Stays in Finland</h1>
            <span>{bnbList.length <= 12 ? bnbList.length : "12+"} stays</span>
          </div>
          <div className="cardContainer">{bnbList.length > 0 ? this.renderPropertiesCard() : <h3>No stay found. Please try another search.</h3>}</div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
