import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import AddNews from "./components/AddNews";
import NewsChange from "./components/NewsChange";
import AllNews from "./components/AllNews";
import { useSelector } from "react-redux";
import UserNavi from "./components/UserNavi";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <>
      <header>
        {isLoggedIn && <Header />}
        {!isLoggedIn && <UserNavi />}
      </header>
      <main>
        <Routes>
          {/* admin routes */}
          {!isLoggedIn ? (
            <Route path="/admin/login" element={<Auth />} />
          ) : (
            <>
              <Route path="/allnews/newschange/:id" element={<NewsChange />} />
              <Route path="/newsdetail/:id" element={<DetailPage />} />
              <Route path="/admin/add" element={<AddNews />} />
            </>
          )}
          {/* user view path */}
          {!isLoggedIn && <Route path="/" element={<HomePage />} />}

          {/* get news cards */}
          <Route path="/allnews" element={<AllNews />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
