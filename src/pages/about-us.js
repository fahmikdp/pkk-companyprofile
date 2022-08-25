import Layout from "@/layouts";

const AboutUs = () => {
  return (
    <Layout>
      <section className="bg-slate-50 py-10 container">
        <h1
          className="text-center text-5xl font-bold 
        after:absolute 
        after:w-24 after:h-1
        after:left-0 after:right-0
        after:m-auto
         after:bg-black
        after:mt-16"
        >
          About Us
        </h1>
        {/* <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-7">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
        <div>
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
        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
