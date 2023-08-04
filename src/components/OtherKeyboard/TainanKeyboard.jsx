



const tainanBtn = [
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
    id: "H",
    name: "H(高鐵)",
    textColor: "",
  },
];

const moreBtn = [
  {
    id: "雙層巴士",
    name: "雙層巴士",
  },
  {
    id: "菱波官田線",
    name: "菱波官田線",
  },
  {
    id: "山博行假日公車",
    name: "山博行假日公車",
  },
];

export default function TainanKeyboard({ onWordKeyClick, onMoreOptionsClick, isOpen }) {
  const tainanBtnGrid = tainanBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn.id}
        id={btn.id}
        value={btn.id}
        className={`w-full h-full rounded bg-white-80 ${
          btn.textColor || "text-black-80"
        } drop-shadow-md cursor-pointer hover:bg-white-100 text-sm`}
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
        {tainanBtnGrid}
        <button
          className="w-full h-full rounded bg-white-80 text-black-80 drop-shadow-md cursor-pointer hover:bg-white-100 text-sm text-center"
          onClick={onMoreOptionsClick}
        >
          更多
        </button>
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
      </div>
    </>
  );
}