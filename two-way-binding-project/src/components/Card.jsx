const Card = (props) => {
  return (
    <div className=" w-90 bg-amber-500 rounded-2xl m-3 flex flex-col items-center gap-2">
      <img
        className="object-center object-cover h-30 w-30 rounded-full mt-8 "
        src={props.elem.imgUrl}
        alt=""
      />
      <h1 className="text-2xl font-bold leading-tight">{props.elem.name}</h1>
      <h5 className="text-blue-500 text-xl font-bold">{props.elem.role}</h5>

      <p className="text-center p-5">{props.elem.dec}</p>

      <button
        onClick={props.deleteHandler}
        className="px-4 py-2 bg-red-500 font-bold text-xl text-white active:scale-95 rounded mb-2"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
