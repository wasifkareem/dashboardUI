import oil from "../assets/oil.svg";
const TipOne = () => {
  return (
    <div className=" bg-gray-100 rounded-xl p-4 text-gray-700 m-3 ">
      <div className=" my-2 mb-5 flex justify-between items-center">
        <p className=" font-semibold text-xl">Oil is up 40%</p>
        <img className=" h-16" src={oil} alt="gold" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptatibus atque, iure culpa reiciendis rerum corporis veritatis
        voluptas dicta numquam, ipsam, necessitatibus quos provident quia
        inventore magni! Aperiam, totam eaque.
      </p>
    </div>
  );
};

export default TipOne;
