import Header from "./components/Header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import AddNews from "./components/AddNews";
import NewsChange from "./components/NewsChange";
import AllNews from "./components/AllNews";
import { useDispatch, useSelector } from "react-redux";
import UserNavi from "./components/UserNavi";
import { authActions } from "./store";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  console.log(isLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
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

              <Route path="/admin/add" element={<AddNews />} />
            </>
          )}
          {/* user view path */}
          {!isLoggedIn && <Route path="/" element={<HomePage />} />}

          {/* get news cards */}
          <Route path="/allnews" element={<AllNews />} />
          <Route path="allnews/newsdetail/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
