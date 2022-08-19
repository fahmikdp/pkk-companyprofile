import Layout from "@/layouts";
import { Card } from "@/components";

const dataCard = [
  {
    title: "Web Services Development",
    desc: "Pengembangan sofware aplikasi yang tidak terpengaruh oleh platform.",
  },
  {
    title: "Web Based Application",
    desc: "Pengembangan aplikasi berbasis web, yang dapat diakses dengan browser dari beragam OS dan Platform.",
  },
  {
    title: "Android Application",
    desc: "Pengembangan aplikasi yang berjalan di perangkat mobile dengan OS Android.",
  },
  {
    title: "Database Application",
    desc: "Pengembangan aplikasi yang berhunbungan dengan akses beragam databases.",
  },
  {
    title: "Automation Enterprise",
    desc: "Pengembangan aplikasi yang berhubungan dengan mesin-mesin industri.",
  },
];

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
            {dataCard.map(({ title, desc }, index) => (
              <Card title={title} desc={desc} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="h-96">
        <div className="hero h-96 bg-[url(/njirs.jpg)] bg-fixed">
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
    </Layout>
  );
};

export default Home;
