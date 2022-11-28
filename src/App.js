import "./App.scss";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import * as ApiServices from "./ApiServices";
import { Fragment, useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore, actions } from "./store";
import ModalCustom from "./components/Modal/Modal";

function App() {
  const [state, dispatch] = useStore();
  const fetchApi = async () => {
    const menus = await ApiServices.menus();
    await dispatch(actions.setMenus(menus));
    const categories = await ApiServices.categories();
    await dispatch(actions.setCategories(categories));
    await dispatch(actions.setLoading(false));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return state.isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              // Page ở đây coi như một component
              const Page = route.component;
              const param = route?.param || null;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                >
                  {param && (
                    <Route
                      path={`:${param}`}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  )}
                </Route>
              );
            })}
            <Route path="*" element={<div>404</div>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      {state.showModal ? <ModalCustom /> : null}
    </>
  );
}

export default App;
