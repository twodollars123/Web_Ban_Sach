import "./App.scss";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import * as ApiServices from "./ApiServices";
import { Fragment, useEffect } from "react";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore, actions } from "./store";

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
                />
              );
            })}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
