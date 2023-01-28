import frontpic from "../../assets/frontend/group-project.png";

const FrontendItem = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <a
          href="https://products-app-kohl.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={frontpic} alt="Group Project" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Swedish Fashion</h2>
        <p className="w-60 text-left">
          It is a team work project that implemented by React.js, Redux Toolkit,
          TypeScript and Material UI as CSS.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-wide hover:bg-[#374EA2]">Open in browser</button>
        </div>
      </div>
    </div>
  );
};
export default FrontendItem;
