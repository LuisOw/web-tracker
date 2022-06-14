import BasicBreadcrumbs from "../navegation/Breadcrumbs";
import Navbar from "../navegation/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <BasicBreadcrumbs />
      {props.children}
    </>
  );
};

export default Layout;
