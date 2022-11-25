import React from "react";

import { Footer, Header } from "./components";
import UserInterface from "./interfaces/User";
import AdminInterface from "./interfaces/Admin";

function App() {
  const [menuOpen, setMenuOpen] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState(false);

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
        {isAdmin ? <AdminInterface /> : <UserInterface />}
      </main>
      <Footer navigationFooter={navigationFooter} />
    </div>
  );
}

export default App;
