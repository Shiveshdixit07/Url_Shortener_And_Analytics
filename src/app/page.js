import { getPosts } from "../../_actions/postAction";
export default async function Home() {
  const res = await getPosts();

  return (
    <main className="bcolor h-screen text-white">
      <h1 className="font-bold text-7xl text-center pt-5 font-serif">
        Url Shortener And Analytics
      </h1>
      <div className="mt-28 scolor h-28 text-black text-5xl font-bold text-center pt-7 mheading">
        Enter Your Long Url
      </div>
      <form
        method="POST"
        action="/url"
        className="mt-5 h-20 flex justify-center items-center"
      >
        <input
          placeholder="https://www.yoursite.com/"
          className="h-11  text-black w-1/3 rounded"
          name="url"
        ></input>
        <button className="bg-indigo-600 h-11 w-20 rounded-md ml-7">
          Generate
        </button>
      </form>
      <form
        method="POST"
        action="/url/analytics"
        className="mt-5 h-20 flex justify-center items-center"
      >
        <input
          placeholder="https://www.yoursite.com/"
          className="h-11  text-black w-1/3 rounded"
          name="url"
        ></input>
        <button className="bg-indigo-600 h-11 w-20 rounded-md ml-7">
          Analytics
        </button>
      </form>
    </main>
  );
}
