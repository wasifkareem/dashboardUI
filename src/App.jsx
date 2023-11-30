import Graph from "./components/Graph";
import Navbar from "./components/Navbar";
import StockList from "./components/StockList";
import TipOne from "./components/TipOne";
import TipTwo from "./components/TipTwo";
import TipThree from "./components/TipThree";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "./redux/btnSlice";

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.btn.toggle);

  const handleClick = () => {
    if (toggle == 1) {
      dispatch(setToggle(2));
    } else if (toggle == 2) {
      dispatch(setToggle(3));
    } else {
      dispatch(setToggle(1));
    }
  };
  return (
    <div className=" pb-20">
      <Navbar />
      <div className=" flex flex-col gap-4 ml-3 mt-10 mb-2 sm:ml-10 ">
        <h1 className=" font-semibold text-3xl text-gray-800">Portfolio</h1>
        <button className=" bg-[#c5cff383]  p-1 px-5 rounded-2xl w-fit  text-[#8096f1] font-semibold">
          Settings
        </button>
      </div>
      <Graph />
      <div className=" flex flex-col sm:flex-row sm:ml-14 sm:mx-4">
        <div className=" flex flex-col gap-10 mt-8 sm:flex-row sm:w-[70vw]">
          <div className=" sm:w-[40%]">
            <div>
              <div className=" flex  justify-between px-3 items-center">
                <p className=" font-semibold font-sans">Stocks</p>
                <button className=" rounded-md bg-[#f5f6fa] text-[#8f9bcc] p-1 px-2">
                  Buy New
                </button>
              </div>
            </div>
            <StockList />
          </div>
          <div className=" sm:w-[40%]">
            <div className=" flex justify-between px-3 items-center">
              <p className=" font-semibold font-sans">Options</p>
              <button className=" rounded-md bg-[#f5f6fa] text-[#8f9bcc] p-1 px-2">
                Buy New
              </button>
            </div>
            <StockList />
          </div>
        </div>
        <div className=" sm:w-[30vw]">
          <p className=" font-semibold text-xl mx-4 mt-8 text-gray-800 mb-4">
            Tips
          </p>
          {toggle === 1 ? <TipOne /> : toggle === 2 ? <TipTwo /> : <TipThree />}
          <div className=" flex justify-between items-center mx-8 my-2">
            <div className=" flex gap-3">
              {toggle == 1 ? (
                <hr className=" h-[3px] w-10 bg-[#7180bf]" />
              ) : (
                <hr className=" h-[3px] w-10 bg-gray-200" />
              )}{" "}
              {toggle == 2 ? (
                <hr className=" h-[3px] w-10 bg-[#7180bf]" />
              ) : (
                <hr className=" h-[3px] w-10 bg-gray-200" />
              )}{" "}
              {toggle == 3 ? (
                <hr className=" h-[3px] w-10 bg-[#7180bf]" />
              ) : (
                <hr className=" h-[3px] w-10 bg-gray-200" />
              )}
            </div>
            <button
              onClick={handleClick}
              className=" font-semibold text-gray-900 text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
