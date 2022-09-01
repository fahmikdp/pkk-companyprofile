import Layout from "@/layouts";
import { Header } from "@/components";

const AboutUs = () => {
  return (
    <Layout>
      <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
        <Header title="About Us" />
        <div className="mt-10 text-center">
          <p className="text-xl font-bold ">We Are In Depth</p>
          <br />
          <p>
            {" "}
            <b>Company Profile</b> is a company that specializes in software
            development and automation technology. Based on more than ten years
            experience the company was later established in providing services
            that are strategy on the field of industrial and other applications.
          </p>
          <br />
          <p>
            {" "}
            By relying on web technology and mastering linux operating system
            and understanding of control technology with microcontroller and
            plc, we offer various solutions for your problems.
          </p>
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
        </div>

        {/* <div class="card lg:card-side bg-base-100 shadow-xl mt-10">
          <figure>
            <img src="/companymeeting.jpg" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Nih kitah lagih mitingggg hehehe</h2>
            <p>Ini lagi ngomongin LRT sama Dojo app</p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </div>
        <div class="card sm:card-compact bg-base-100 shadow-xl mt-2">
          <figure>
            <img
              src="https://placeimg.com/400/225/arch"
              class="w-96"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default AboutUs;
