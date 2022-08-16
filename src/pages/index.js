import Layout from "@/layouts";
import { Alert } from "flowbite-react";

const Home = () => {
  return (
    <Layout title="Home">
      <Alert color="info">Hai</Alert>
      <h1 className="text-8xl text-pink-600 font-bold">Aku Pulang</h1>
    </Layout>
  );
};

export default Home;
