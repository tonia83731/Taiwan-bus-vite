import NumberKeyboard from "./NumberKeyboard";
import TaipeiKeyboard from "./OtherKeyboard/TaipeiKeyboard";
import NewTaipeiKeyboard from "./OtherKeyboard/NewTaipeiKeyboard";
import TaichungKeyboard from "./OtherKeyboard/TaichungKeyboard";
import TainanKeyboard from "./OtherKeyboard/TainanKeyboard";
import KaohsiungKeyboard from "./OtherKeyboard/KaohsiungKeyboard";

export default function Keyboard({onNumKeyClick, onWordKeyClick}) {
  return (
    <form action="" className="grid gap-4 grid-cols-5 h-[140px]">
      <div className="col-span-2">
        <TaipeiKeyboard onWordKeyClick={onWordKeyClick} />
        {/* <NewTaipeiKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <TaichungKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <TainanKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <KaohsiungKeyboard onWordKeyClick={onWordKeyClick}/> */}
      </div>
      <div className="col-start-3 col-span-3">
        <NumberKeyboard onNumKeyClick={onNumKeyClick} onWordKeyClick />
      </div>
    </form>
  );
}
