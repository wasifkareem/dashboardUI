import coal from "../assets/coal.svg";
const TipOne = () => {
  return (
    <div className=" bg-gray-100 rounded-xl p-4 text-gray-700 m-3 ">
      <div className=" my-2 mb-5 flex justify-between items-center">
        <p className=" font-semibold text-xl">Coal is up 50%</p>
        <img className=" h-16" src={coal} alt="gold" />
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
