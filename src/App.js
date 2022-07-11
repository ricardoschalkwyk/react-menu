import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

const items = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    productName: "Green Beans",
    description:
      "Green beans (Leguminosae) are the unripe fruit of various cultivars of the common bean (Phaseolus vulgaris), selected especially for the flavor or sweetness of their pods.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1582280722302-a9a04506eb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    productName: "Red Beans",
    description:
      "Red bean is a common name for several plants and may refer to: Adzuki bean (Vigna angularis), commonly used in Japanese, Korean, and Chinese cuisine, particularly as red bean paste. Kidney bean, red variety of Phaseolus vulgaris, commonly used in Indian and North American cuisine, such as chili con carne.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1580979443662-13a976bd7632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80",
    productName: "Black beans",
    description:
      "Black beans are classified as legumes. Also known as turtle beans because of their hard, shell-like appearance, black beans are, in fact, the edible seeds of the plant. Like other legumes, such as peanuts, peas, and lentils, black beans are prized for their high protein and fiber content.",
  },
];

const users = [
  {
    id: "1",
    name: "Kevin",
    age: "24",
    email: "Kevin24@gmail.com",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header
          name={"Horizon Beans"}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <div>
                {loggedIn && <HomePage />}
                {loggedIn && <HomePage /> ? <LandingPage /> : null}
              </div>
            </Route>
            <Route path="/profile">
              <div>{loggedIn && <Profile user={users} />}</div>
            </Route>
            <Route path="/products">
              <div> {loggedIn && <Products items={items} />}</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
