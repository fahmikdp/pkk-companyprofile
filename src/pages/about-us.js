import Layout from "@/layouts";
import { Header, CardProfile } from "@/components";

const dataprofile = [
  {
    pathfb: "",
    pathig: "https://www.instagram.com/kochan4php/",
    img: "/bjorka.jpg",
    name: "Bjorkanism",
    role: "CEO / FOUNDER",
  },
  {
    pathfb: "",
    pathig: "https://www.instagram.com/fahmikdp/",
    img: "/anonym.jpg",
    name: "FF_r1skY_h3NgKeRr21",
    role: "CO FOUNDER",
  },
  {
    pathfb: "",
    pathig: "https://www.instagram.com/_prayudhaibnu/",
    img: "/heker.jpg",
    name: "IbnuTzy",
    role: "Programmer Pengalaman 2hari",
  },
];

const AboutUs = () => {
  return (
    <Layout>
      <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
        <Header title="About Us" />
        <div className="mt-10 text-center">
          <p className="text-xl font-bold ">We Are In Depth</p>
          <br />

          <div class="hero bg-slate-50">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="/images.jpg"
                class="xl:min-w-[500px] md:min-w-[400px] sm:min-w-[300px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 class="text-3xl lg:text-4xl font-bold mt-5 xl:mt-0">
                  Who're we?
                </h1>
                <p class="py-6 ">
                  <b>Company Profile</b> is a company that specializes in
                  software development and automation technology. Based on more
                  than ten years experience the company was later established in
                  providing services that are strategy on the field of
                  industrial and other applications.
                </p>
              </div>
            </div>
          </div>

          <br />

          <div class="hero bg-slate-50 -mt-5 lg:mt-0">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img
                src="/companymeeting.jpg"
                class="xl:min-w-[500px] md:min-w-[400px] sm:min-w-[300px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 class="text-3xl lg:text-4xl font-bold mt-5 xl:mt-0">
                  Solve your problems!
                </h1>
                <p class="py-6 ">
                  By relying on web technology and mastering linux operating
                  system and understanding of control technology with
                  microcontroller and plc, we offer various solutions for your
                  problems.
                </p>
                {/* <button class="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>

          <br />
          <p className="text-xl font-bold text-center">Vision</p>
          <p>
            Providing appropriate solutions, right price and right on target.
          </p>

          <br />
          <p className="text-xl font-bold text-center">Mission</p>
          <p>Building the needs of industry and other software needed.</p>
          <br />
          <br />
          <p className="text-3xl font-extrabold">Our Team!</p>
          <br />
          <div className="flex justify-center gap-6 flex-wrap">
            {dataprofile.map(({ img, name, role, pathfb, pathig }, index) => (
              <CardProfile
                img={img}
                name={name}
                role={role}
                pathfb={pathfb}
                pathig={pathig}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
