import Layout from "@/layouts";

const Contact = () => {
  return (
    <Layout>
      <div>
        <section>
          <div className="container flex flex-col justify-center items-center gap-5 bg-slate-50 py-10">
            <h1
              className="text-center text-5xl font-bold 
        after:absolute 
        after:w-24 after:h-1
        after:left-0 after:right-0
        after:m-auto
        after:bg-black
        after:mt-16"
            >
              Contact Kami
            </h1>
            <p className="text-lg font-semibold mt-10">
              Isi formulir di bawah ini dan Anda akan segera mendengar kabar
              dari kami
            </p>
            <div className="flex gap-2">
              <button class="rounded btn btn-active">GOOGLE</button>
              <button class="rounded btn btn-active btn-primary">YT</button>
              <button class="rounded btn btn-active btn-secondary">FB</button>
              <button class="rounded btn btn-active btn-accent">IG</button>
            </div>
          </div>
        </section>
        <section>
          <div className="container flex justify-center items-center flex-col">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
