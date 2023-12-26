import Sidebar from "./components/SideBar";
import NoProjectImg from "./assets/no-projects.png";

const projects = [];
function App() {
  return (
    <div className="flex">
      <Sidebar projects={projects} />
      <div className="w-full">
        {projects == 0 ? (
          <div className="object-contain mx-auto align-middle ">
            <img src={NoProjectImg} alt="no projects" width="50px" />
            <div className="text-lg text-black">No Project Selected</div>
            <div className="text-gray-500">
              Select a project or get started with a new one.
            </div>
            <button className="px-2 py-2 mt-3 text-stone-500 bg-slate-800 rounded">
              Create a new project
            </button>
          </div>
        ) : (
          projects
        )}
      </div>
    </div>
  );
}

export default App;
