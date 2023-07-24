import NumberKeyboard from "./NumberKeyboard";
import TaipeiKeyboard from "./OtherKeyboard/TaipeiKeyboard";
import NewTaipeiKeyboard from "./OtherKeyboard/NewTaipeiKeyboard";
import TaichungKeyboard from "./OtherKeyboard/TaichungKeyboard";
import TainanKeyboard from "./OtherKeyboard/TainanKeyboard";
import KaohsiungKeyboard from "./OtherKeyboard/KaohsiungKeyboard";

export default function Keyboard() {
  return (
    <form action="" className="grid gap-4 grid-cols-5 h-[140px]">
      <div className="col-span-2">
        <TaipeiKeyboard />
        {/* <NewTaipeiKeyboard /> */}
        {/* <TaichungKeyboard/> */}
        {/* <TainanKeyboard /> */}
        {/* <KaohsiungKeyboard/> */}
      </div>
      <div className="col-start-3 col-span-3">
        <NumberKeyboard />
      </div>
    </form>
  );
}
