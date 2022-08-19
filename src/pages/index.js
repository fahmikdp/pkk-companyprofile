import Layout from "@/layouts";
import { Card } from "@/components";

const Home = () => {
  return (
    <Layout title="Home">
      <section className="min-h-screen">
        <div className="hero min-h-screen bg-[url(/njirs.jpg)] bg-fixed">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="container">
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Farhan Kebab</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Ah Ah Enak</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-28 bg-slate-100">
        <div className="container py-2 flex flex-col items-center gap-12">
          <div>
            <h1 className="mb-5 text-5xl font-bold text-center">
              Our Services
            </h1>
            <p className="text-center text-base md:text-lg">
              Silahkan menghubungi kami jika anda membutuhkan layanan berikut
            </p>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
