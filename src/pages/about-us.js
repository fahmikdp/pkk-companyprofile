import Layout from "@/layouts";
import { Header } from "@/components";
import { FaFacebookF } from "react-icons/fa";

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

          <div class="card w-96 bg-slate-50 shadow-xl">
            <figure class="px-10 pt-10">
              <img src="/heker.jpg" alt="Shoes" class="rounded-full" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl">Jancuk Pristel</h2>
              <i className="text-zinc-600 ">CEO / FOUNDER</i>
              <div class="card-actions font-light ">
                <button class="btn btn-primary rounded-full">
                  <FaFacebookF />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
