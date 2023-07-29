
const numBtn = [1, 2, 3, 4, 5, 6, 7, 8, 9, "其他", 0, "清除"]

export default function NumberKeyboard({onNumKeyClick}){
  const numBtnGrid = numBtn.map((btn) => {
    return (
      <input
        type="button"
        key={btn}
        id={btn}
        value={btn}
        className="w-full h-full rounded bg-white-80 text-black-80 drop-shadow-md cursor-pointer hover:bg-white-100 text-sm"
        onClick={onNumKeyClick}
      />
    );
  })
  return (
    <div className="w-full h-full grid gap-2 grid-cols-3">{numBtnGrid}</div>
  );
}