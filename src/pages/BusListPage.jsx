import Header from "../components/Header";
import MainArea from "../components/MainArea";
import BusList from "../components/BusList";
import Keyboard from "../components/Keyboard";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function BusListPage() {
  const [inputValue, setInputValue] = useState("")

  const handleNumKeyClick = (e) => {
    const value = e.target.value
    if(value !== "其他" && value !== "清除"){
      setInputValue((prev) => prev + value);
    } else if (value === "清除"){
      setInputValue("")
    }
  }
  const handleWordKeyClick = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    setInputValue((prev) => prev + value)
  }

  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="px-6 h-full grid gap-4 grid-cols-4 items-center relative">
            <Link to="/">
              <div className="text-sm hover:font-bold">&#8249; 返回主頁</div>
            </Link>
            <div className="font-bold col-span-3 text-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              台北等公車
            </div>
          </div>
        </Header>
        <MainArea height="h-[calc(100vh-172px)]">
          <BusList inputValue={inputValue}/>
        </MainArea>
      </div>
      <div className="bg-light-biege px-2 py-4 z-[100]">
        <Keyboard onNumKeyClick={handleNumKeyClick} onWordKeyClick={handleWordKeyClick}/>
      </div>
    </div>
  );
}
