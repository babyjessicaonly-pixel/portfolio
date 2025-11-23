import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default AppLayout;