import Layout from "@/layouts";
import { Header } from "@/components";

const AboutUs = () => {
  return (
    <Layout>
      <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
        <Header title="About Us" />

        <div class="card lg:card-side bg-base-100 shadow-xl mt-10">
          <figure>
            <img src="/companymeeting.jpg" alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Nih kitah lagih mitingggg hehehe</h2>
            <p>Ini lagi ngomongin LRT sama Dojo app</p>
            <div class="card-actions justify-end">
              {/* <button class="btn btn-primary">Listen</button> */}
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
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
