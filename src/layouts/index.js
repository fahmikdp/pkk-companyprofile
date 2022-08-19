import PropTypes from "prop-types";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

const Layout = ({ children }) => (
  <>
    <div>
      <Head>
        <title>Company Profile</title>
      </Head>
    </div>
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Navbar />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
