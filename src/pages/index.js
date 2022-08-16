import Layout from "@/layouts";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="min-h-screen">
        <div className="hero min-h-screen bg-[url(/njirs.jpg)] bg-fixed">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Farhan Kebab</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Ah Ah Enak</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
