import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Mercury from "./pages/Marcury";
import './App.css';
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Mercury />
        </Route>
        <Route path="/venus">
        <Venus />
        </Route>
        <Route path="/earth">
          <Earth />
        </Route>
        <Route path="/mars">
          <Mars />
        </Route  >
        <Route path="/jupiter">
          <Jupiter />
        </Route>
        <Route path="/saturn">
          <Saturn />
        </Route>
        <Route path="/uranus">
          <Uranus />
        </Route>
        <Route path="/neptune" >
          <Neptune />
        </Route>
      </Switch>
    </Layout>
    // <div >

    //   <Header />
    //   <div className="container">
    //     <Planets />
    //     <Statistics />
    //   </div>
    // </div>
  );
}

export default App;
