import { Component } from "react";
import CardsList from "./components/cards-list/cards-list.componet"
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monstors: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monstors: user };
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
      // return { searchField: searchField }
    })
  }

  render() {

    const { monstors, searchField } = this.state;
    const { onSearchChange } = this

    const filteredMonstors = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />

        <CardsList monsters={filteredMonstors} />

      </div>
    );
  }
}

export default App;
