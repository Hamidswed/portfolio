const GraphicItem = ({ item }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="text-left">{item.description}</p>
        <div className="card-actions justify-end">
          <a href={item.link} target="_blank" rel="noreferrer">
            <button className="btn hover:bg-[#374EA2]">
              More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default GraphicItem;
