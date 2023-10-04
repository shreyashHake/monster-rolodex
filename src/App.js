// import { Component } from "react";
import CardsList from "./components/cards-list/cards-list.componet"
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect, useState } from "react";

// Functional component method 1 : 

const App = () => {
  
  const [searchField, setSearchField] = useState("a");
  const [monsters, setMonters] = useState([]);
  const [filteredMonstors, setFilteredMonstors] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // will only get call onece so array of dependencies is emplty i.e. []
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonters(user));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonstors(newFilteredMonsters);
  }, [monsters, searchField])


  return (
    <div className="App">
      <h1 className="app-title">Monster Hunt</h1>
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardsList monsters={filteredMonstors} />
    </div>
  )
}


// Class Component approach (Method 2)

/**
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
      // both works fine : 
      // return { searchField }
      return { searchField: searchField }
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
        <h1 className="app-title">Monster Hunt</h1>
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

 */

export default App;
