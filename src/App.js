import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import UserInterface from "./interfaces/User";
import AdminInterface from "./interfaces/Admin";

function App() {
  const [menuOpen, setMenuOpen] = React.useState();

  const navigation = ["Home", "About us", "Contacts", "Search"];
  const navigationFooter = ["About us", "Gallery", "News", "Contacts"];

  return (
    <div className="App">
      <Header
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        navigation={navigation}
        navigationFooter={navigationFooter}
      />
      <main className="wrapper">
        <Routes>
          <Route exact path="/admin/*" element={<AdminInterface />}></Route>
          <Route exact path="/*" element={<UserInterface />}></Route>
        </Routes>
      </main>
      <Footer navigationFooter={navigationFooter} />
    </div>
  );
}

export default App;
