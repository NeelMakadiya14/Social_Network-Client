import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import Home from "./Pages/Home.js";

//window.localStorage.setItem("isAuthenticate", "No");
function App() {
  const [theme, setTheme] = useState(true);
  const [Auth, setAuth] = useState(
    window.localStorage.getItem("isAuthenticate")
  );
  /* window.alert(
    window.localStorage.getItem("isAuthenticate") +
      "....LS from App outside setter"
  );
  */

  const Authenticate = () => {
    /*   console.log("called.");
    window.alert(
      window.localStorage.getItem("isAuthenticate") + "..LS from App"
    );
*/
    setAuth(window.localStorage.getItem("isAuthenticate"));
    //  window.alert(Auth + "..Hook from App");
  };

  const toggle = () => {
    setTheme(!theme);
    //  console.log(theme);
  };
  const appliedTheme = createMuiTheme(theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
      <Router>
        <div className="App">
          <div className="Container">
            <Route
              exact
              path="/"
              render={(props) =>
                Auth === "Yes" ? (
                  <Home
                    theme={theme}
                    toggle={toggle}
                    Auth={Auth}
                    Authenticate={Authenticate}
                  />
                ) : (
                  <Login Auth={Auth} Authenticate={Authenticate} />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                Auth === "Yes" ? (
                  <Home
                    theme={theme}
                    toggle={toggle}
                    Auth={Auth}
                    Authenticate={Authenticate}
                  />
                ) : (
                  <Login Auth={Auth} Authenticate={Authenticate} />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={(props) =>
                Auth === "Yes" ? (
                  <Home
                    theme={theme}
                    toggle={toggle}
                    Auth={Auth}
                    Authenticate={Authenticate}
                  />
                ) : (
                  <Register Auth={Auth} Authenticate={Authenticate} />
                )
              }
            />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light",
    primary: {
      main: "#253053",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
};
export const dark = {
  palette: {
    type: "dark",
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#00796b",
    },
  },
};

export default App;
