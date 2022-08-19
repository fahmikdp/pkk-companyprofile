import Layout from "@/layouts";

const Contact = () => {
  return (
    <Layout>
      <div>
        <section>
          <div className="container my-8">
            <h2 className="text-3xl font-bold">Contact kami</h2>
          </div>
        </section>
        <section>
          <div className="container flex flex-col justify-center items-center my-12 gap-5">
            <h2 className="text-5xl">Contact kami</h2>
            <p className="text-lg font-semibold">
              Isi formulir di bawah ini dan Anda akan segera mendengar kabar
              dari kami
            </p>
            <div className="flex gap-2">
              <button class="rounded btn btn-active">Gggl</button>
              <button class="rounded btn btn-active btn-primary">yt</button>
              <button class="rounded btn btn-active btn-secondary">fb</button>
              <button class="rounded btn btn-active btn-accent">ig</button>
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
