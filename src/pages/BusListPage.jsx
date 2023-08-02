import Header from "../components/Header";
import MainArea from "../components/MainArea";
import BusList from "../components/BusList";
import Keyboard from "../components/Keyboard";

import { getBusCity } from "../api/getBusRoute";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BusListPage() {
  const [inputValue, setInputValue] = useState("");
  const [busList, setBusList] = useState([])

  const city = useParams().name;
  // console.log(city)
  let titleName = "";

  if (city === "Taipei") {
    titleName = "台北";
  } else if (city === "NewTaipei") {
    titleName = "新北";
  } else if (city === "Taichung") {
    titleName = "台中";
  } else if (city === "Tainan") {
    titleName = "台南";
  } else {
    titleName = "高雄";
  }

  const handleNumKeyClick = (e) => {
    const value = e.target.value;
    if (value !== "其他" && value !== "清除") {
      setInputValue((prev) => prev + value);
    } else if (value === "清除") {
      setInputValue("");
    }
  };
  const handleWordKeyClick = (e) => {
    const value = e.target.value;
    setInputValue((prev) => prev + value);
  };

  // const handleBusChange = () => {

  // }

  useEffect(() => {
    const getBusCityAsync = async () => {
      try {
        const busCity = await getBusCity(city);
        // console.log(busCity);
        setBusList(busCity);
      } catch (error) {
        console.error(error);
      }
    };
    getBusCityAsync();
  }, []);
  // console.log(inputValue)
  // console.log(busList)
  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="px-6 h-full grid gap-4 grid-cols-4 items-center relative">
            <Link to="/">
              <div className="text-sm hover:font-bold">&#8249; 返回主頁</div>
            </Link>
            <div className="font-bold col-span-3 text-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              {titleName}等公車
            </div>
          </div>
        </Header>
        <MainArea height="h-[calc(100vh-172px)]">
          <BusList
            inputValue={inputValue}
            // onBusChange={handleBusChange}
            props={busList}
          />
        </MainArea>
      </div>
      <div className="bg-light-biege px-2 py-4 z-[100]">
        <Keyboard
          onNumKeyClick={handleNumKeyClick}
          onWordKeyClick={handleWordKeyClick}
          city={city}
        />
      </div>
    </div>
  );
}
