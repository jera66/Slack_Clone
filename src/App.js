/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Switch } from 'react-router'
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />

            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  {/* <Chat /> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome to Slack </h1>
                </Route>
              </Switch>
              {/* React router => chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;