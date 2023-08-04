const newTaipeiBtn = [
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
    id: "F",
    name: "F(新巴士)",
    textColor: "",
  },
  {
    id: "安坑",
    name: "安坑",
    textColor: "",
  },
  {
    id: "湯泉",
    name: "湯泉",
    textColor: "",
  },
];

export default function NewTaipeiKeyboard({onWordKeyClick}) {
  const newTaipeiBtnGrid = newTaipeiBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn.id}
        id={btn.name}
        value={btn.id}
        className={`w-full h-full rounded bg-white-80 ${
          btn.textColor || "text-black-80"
        } drop-shadow-md cursor-pointer hover:bg-white-100 text-sm`}
        onClick={onWordKeyClick}
      />
    );
  });
  return (
    <div className="w-full h-full grid gap-2 grid-cols-2">
      {newTaipeiBtnGrid}
    </div>
  );
}
