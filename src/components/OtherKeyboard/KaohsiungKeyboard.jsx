
const kaohsiungBtn = [
  {
    id: "紅",
    name: "紅",
    textColor: "text-red-100",
  },
  {
    id: "橘",
    name: "橘",
    textColor: "text-orange-100",
  },
  {
    id: "黃",
    name: "黃",
    textColor: "text-yellow-100",
  },
  {
    id: "E",
    name: "E(快線)",
    textColor: "",
  },
  {
    id: "T",
    name: "T",
    textColor: "",
  },
  {
    id: "JOY",
    name: "JOY",
    textColor: "",
  },
];
const moreBtn = [
  {
    id: "大樹",
    name: "大樹",
  },
  {
    id: "大湖",
    name: "大湖",
  },
  {
    id: "大寮",
    name: "大寮",
  },
  {
    id: "永安",
    name: "永安",
  },
  {
    id: "燕巢",
    name: "燕巢",
  },
];


export default function KaohsiungKeyboard({onWordKeyClick, onMoreOptionsClick, isOpen}){
  const kaohsiungBtnGrid = kaohsiungBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn.id}
        id={btn.id}
        value={btn.id}
        className={`w-full h-full rounded bg-white-80 ${
          btn.textColor || "text-black-80"
        } drop-shadow-md cursor-pointer hover:bg-white-100 text-sm ${
          btn.gridSpan || ""
        }`}
        onClick={onWordKeyClick}
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
          onClick={onWordKeyClick}
        />
      </li>
    );
  });
  return (
    <>
      <div className="w-full h-full grid gap-2 grid-cols-2">
        {kaohsiungBtnGrid}
        <button
          className="w-full h-full rounded bg-white-80 text-black-80 drop-shadow-md cursor-pointer hover:bg-white-100 text-sm text-center col-span-2"
          onClick={onMoreOptionsClick}
        >
          更多
        </button>
      </div>
      {isOpen && (
        <ul className="w-full z-10 bg-white-100 more-options-list fixed bottom-4 text-center">
          {moreBtnList}
          <input
            type="button"
            id="cancel"
            value="取消"
            className="w-full text-black-80 cursor-pointer hover:bg-black-20 text-sm py-4"
            onClick={onWordKeyClick}
          />
        </ul>
      )}
    </>
  );
}