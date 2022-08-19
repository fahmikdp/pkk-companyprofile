import Layout from '@/layouts'

const Contact = () => {
    return (
        <Layout>
            <section>
            
                <h2>Contact kami</h2>
                <p>Isi formulir di bawah ini dan Anda akan segera mendengar kabar dari kami</p>
                <div>
                <button class="btn btn-active">Gggl</button>
                <button class="btn btn-active btn-primary">yt</button>
                <button class="btn btn-active btn-secondary">fb</button>
                <button class="btn btn-active btn-accent">ig</button>
                <button class="btn btn-active btn-ghost">github</button>
                </div>
            </section>
        <section>
            <div className="container flex justify-center items-center flex-col">
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
    
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nama"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
    
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Subject">
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subject" type="subject" placeholder="Subject"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Pesan">
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Messege" type="Messege" placeholder="Pesan"/>
      <p class="text-gray-600 text-xs italic">Isi pesan yang ingin anda sampaikan pada kami</p>
      <button class="btn">Kirim pesan</button>

    </div>
  </div>
</form>
            </div>
        </section>

        </Layout>
    )
}

export default Contact;