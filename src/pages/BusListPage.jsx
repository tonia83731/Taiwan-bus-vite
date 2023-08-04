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
  const [filter, setFilter] = useState([])
  const [isOpen, setIsOpen] = useState(false);

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
    if (value !== "←" && value !== "清除") {
      setInputValue((prev) => prev + value);
      const filterList = busList.filter((route) => {
        return route.RouteName.Zh_tw.includes(inputValue + value);
      });
      setFilter(filterList);
    } else if (value === "清除") {
      setInputValue("");
      setFilter(busList)
    } else if (value === "←"){
      setInputValue((prev) => prev.slice(0, -1));
      const filterList = busList.filter((route) => {
        return route.RouteName.Zh_tw.includes(inputValue.slice(0, -1));
      });
      setFilter(filterList);
    }
  };
  const handleWordKeyClick = (e) => {
    const value = e.target.value;
    if (value === "取消"){
      setIsOpen(false);
    } else {
      setInputValue((prev) => prev + value);
      if (
        value === "通勤" ||
        value === "內科" ||
        value === "南軟" ||
        value === "市民" ||
        value === "貓空" ||
        value === "兒樂" ||
        value === "懷恩" ||
        value === "景美" ||
        value === "臺北觀光" ||
        value === "大樹" ||
        value === "大湖" ||
        value === "大寮" ||
        value === "永安" ||
        value === "燕巢" ||
        value === "雙層巴士" ||
        value === "菱波官田線" ||
        value === "山博行假日公車"
      ) {
        setIsOpen(false);
      }
      const filterList = busList.filter((route) => {
        return route.RouteName.Zh_tw.includes(inputValue + value);
      });
      setFilter(filterList);
    }
  };
  const handleBusChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    // console.log(value)
    const filterList = busList.filter((route) => {
      return route.RouteName.Zh_tw.includes(value);
    });
    setFilter(filterList);
    // console.log(filterList)
  }
  const handleMoreOptionsClick = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }
  const handleMoreOptionsClose = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }

  // const handleBusClick = (e) => {
  //   e.preventDefault()
  //   if(inputValue.length === 0) return
  //   const filterList = busList.filter((route) => {
  //     return route.RouteName.Zh_tw.includes(inputValue);
  //   });
  //   // console.log(filterList);
  //   // setBusList(filterList)
  //   setFilter(filterList)
  //   setInputValue('')
  // }
  // const handleRefreshClick = () => {
  //   // window.location.reload();
  // }

  useEffect(() => {
    const getBusCityAsync = async () => {
      try {
        const busCity = await getBusCity(city);
        // console.log(busCity);
        setBusList(busCity);
        setFilter(busCity)
      } catch (error) {
        console.error(error);
      }
    };
    getBusCityAsync();
  }, []);
  // console.log(inputValue)
  // console.log(busList)
  // console.log(filter)
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
            onBusChange={handleBusChange}
            // onBusClick={handleBusClick}
            // onRefreshClick={handleRefreshClick}
            props={filter}
            cityName={city}
          />
        </MainArea>
      </div>
      <div className="bg-light-biege px-2 py-4 z-[100]">
        <Keyboard
          onNumKeyClick={handleNumKeyClick}
          onWordKeyClick={handleWordKeyClick}
          city={city}
          onMoreOptionsClick={handleMoreOptionsClick}
          onMoreOptionClose={handleMoreOptionsClose}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}
