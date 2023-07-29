



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
    gridSpan: "col-span-2",
  },
];

export default function TainanKeyboard({onWordKeyClick}) {
  const tainanBtnGrid = tainanBtn.map((btn) => {
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
  return (
    <div className="w-full h-full grid gap-2 grid-cols-2">
      {tainanBtnGrid}
    </div>
  );
}