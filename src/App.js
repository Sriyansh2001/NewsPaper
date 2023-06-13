import React ,{Component} from "react";
import News from "./components/News";
import Navbar from "./components/navbar"

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News pagesize="9" category="general" country="in"/>
      </>
    )
  }
}

export default App;