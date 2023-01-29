
const FrontendItem = ({ item }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <a href={item.link} target="_blank" rel="noreferrer">
          <img src={item.image} alt={item.title} />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="w-60 text-left">{item.description}</p>
        <div className="card-actions justify-end">
          <a href={item.link} target="_blank" rel="noreferrer">
            <button className="btn btn-wide hover:bg-[#374EA2]">
              Open in browser
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FrontendItem;
