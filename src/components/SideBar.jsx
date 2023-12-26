export default function Sidebar({projects}) {
  return (
    <section className="w-1/5 bg-black min-h-dvh mt-3 rounded-tr-xl">
      <div className="text-white text-center py-5 font-bold">YOUR PROJECTS</div>
      <button className="block mx-auto bg-stone-600 rounded mt-5 p-1 text-stone-400 px-3 py-1">
        + Add Project
      </button>
    </section>
  );
}
