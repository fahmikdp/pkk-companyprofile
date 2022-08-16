import PropTypes from "prop-types";
import Head from "next/head";
import { Navbar } from "@/components";

const Layout = ({ children, title }) => (
  <>
    <div>
      <Head>
        <title>{title} - Next.js</title>
      </Head>
    </div>
    <div className="min-h-screen w-full flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
