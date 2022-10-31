import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="layout_container">
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
