
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



export default function KaohsiungKeyboard({onWordKeyClick}){
  const kaohsiungBtnGrid = kaohsiungBtn.map((btn) => {
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
  return (
    <div className="w-full h-full grid gap-2 grid-cols-2">
      {kaohsiungBtnGrid}
    </div>
  );
}