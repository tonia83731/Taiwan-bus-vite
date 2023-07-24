import { useState } from "react";



const taipeiBtn = [
  {
    id: "紅",
    name: "紅",
    textColor: "text-red-100",
  },
  {
    id: "綠",
    name: "綠",
    textColor: "text-green-100",
  },
  {
    id: "藍",
    name: "藍",
    textColor: "text-blue-100",
  },
  {
    id: "棕",
    name: "棕",
    textColor: "text-brown-100",
  },
  {
    id: "小",
    name: "小",
    textColor: "",
  },
  {
    id: "幹線",
    name: "幹線",
    textColor: "",
  },
];

const moreBtn = [
  {
    id: "通勤",
    name: "通勤",
  },
  {
    id: "內科",
    name: "內科",
  },
  {
    id: "南軟",
    name: "南軟",
  },
  {
    id: "市民",
    name: "市民",
  },
];

export default function TaipeiKeyboard() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionsClick = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }
  const taipeiBtnGrid = taipeiBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn.id}
        id={btn.name}
        value={btn.name}
        className={`w-full h-full rounded bg-white-80 ${
          btn.textColor || "text-black-80"
        } drop-shadow-md cursor-pointer hover:bg-white-100 text-sm ${
          btn.gridSpan || ""
        }`}
      />
    );
  });
  const moreBtnList = moreBtn.map((btn) => {
    return (
      <li className="border-b">
        <input
          type="button"
          key={btn.id}
          id={btn.name}
          value={btn.name}
          className={`w-full h-full text-black-80 cursor-pointer hover:bg-black-5 text-sm py-2`}
        />
      </li>
    );
  })
  return (
    <>
      <div className="w-full h-full grid gap-2 grid-cols-2">
        {taipeiBtnGrid}
        <button
          className="w-full h-full rounded bg-white-80 text-black-80 drop-shadow-md cursor-pointer hover:bg-white-100 text-sm text-center col-span-2"
          onClick={handleOptionsClick}
        >
          更多
        </button>
        {/* <input type="checkbox" className="hidden" id="more-options" />
      <label
        htmlFor="more-options"
        className="`w-full h-full rounded bg-white-80 text-black-80 drop-shadow-md cursor-pointer hover:bg-white-100 text-sm text-center col-span-2 more-options-toggle"
      >
        更多
      </label> */}
      </div>
      {isOpen && (
        <ul className="w-full z-10 bg-white-100 more-options-list fixed bottom-4 text-center">
          {moreBtnList}
          <button
            className="w-full text-black-80 cursor-pointer hover:bg-black-20 text-sm py-4"
            onClick={() => setIsOpen(false)}
          >
            取消
          </button>
        </ul>
      )}
    </>
  );
}