import Layout from "@/layouts";
import { Header } from "@/components";

const Contact = () => {
  return (
    <Layout>
      <div>
        <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
          <div className="flex flex-col justify-center items-center gap-5">
            <Header title="Contact Here" />
            <p className="text-lg font-semibold mt-10 text-center">
              Isi formulir di bawah ini dan Anda akan segera mendengar kabar
              dari kami
            </p>
            <div className="flex gap-2">
              <button class="rounded btn btn-active btn-outline btn-light">
                <img src="https://img.icons8.com/fluency/30/000000/google-logo.png" />
              </button>
              <button class="rounded btn btn-active btn-outline btn-light">
                <img src="https://img.icons8.com/color/30/000000/youtube-play.png" />
              </button>
              <button class="rounded btn btn-active btn-outline btn-light">
                <img src="https://img.icons8.com/color/30/000000/facebook-new.png" />
              </button>
              <button class="rounded btn btn-active btn-outline btn-light">
                <img src="https://img.icons8.com/fluency/30/000000/instagram-new.png" />
              </button>
            </div>
          </div>
        </section>
        <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
          <div className="flex justify-center items-center flex-col">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Nama"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="subject"
                    type="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="Messege"
                    type="Messege"
                    placeholder="Pesan"
                  />
                  <button class="btn">Kirim pesan</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
