
const taichungBtn = [
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
];


export default function TaichungKeyboard(){
  const taichungBtnGrid = taichungBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn.id}
        id={btn.id}
        value={btn.name}
        className={`w-full h-full rounded bg-white-80 ${btn.textColor} drop-shadow-md cursor-pointer hover:bg-white-100 text-sm`}
      />
    );
  })
  return (
    <div className="w-full h-full grid gap-2 grid-rows-2">{taichungBtnGrid}</div>
  );
}