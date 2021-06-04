import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Link to="/dynamic">link: Dynamic Page</Link>
    </Layout>
  );
};

export default Home;
