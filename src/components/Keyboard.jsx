import NumberKeyboard from "./NumberKeyboard";
import TaipeiKeyboard from "./OtherKeyboard/TaipeiKeyboard";
import NewTaipeiKeyboard from "./OtherKeyboard/NewTaipeiKeyboard";
import TaichungKeyboard from "./OtherKeyboard/TaichungKeyboard";
import TainanKeyboard from "./OtherKeyboard/TainanKeyboard";
import KaohsiungKeyboard from "./OtherKeyboard/KaohsiungKeyboard";

export default function Keyboard({
  onNumKeyClick,
  onWordKeyClick,
  city,
  onMoreOptionsClick,
  onMoreOptionsClose,
  isOpen,
}) {
  return (
    <form action="" className="grid gap-4 grid-cols-5 h-[140px]">
      <div className="col-span-2">
        {/* <TaipeiKeyboard onWordKeyClick={onWordKeyClick} /> */}
        {/* <NewTaipeiKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <TaichungKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <TainanKeyboard onWordKeyClick={onWordKeyClick}/> */}
        {/* <KaohsiungKeyboard onWordKeyClick={onWordKeyClick}/> */}
        <KeyboardType
          city={city}
          onWordKeyClick={onWordKeyClick}
          onMoreOptionsClick={onMoreOptionsClick}
          onMoreOptionClose={onMoreOptionsClose}
          isOpen={isOpen}
        />
      </div>
      <div className="col-start-3 col-span-3">
        <NumberKeyboard onNumKeyClick={onNumKeyClick} />
      </div>
    </form>
  );
}

const KeyboardType = ({city, onWordKeyClick, onMoreOptionsClick, isOpen}) => {
    if (city === "Taipei") {
      return <TaipeiKeyboard onWordKeyClick={onWordKeyClick} onMoreOptionsClick={onMoreOptionsClick} isOpen={isOpen}/>;
    } else if (city === "NewTaipei") {
      return <NewTaipeiKeyboard onWordKeyClick={onWordKeyClick} />;
    } else if (city === "Taichung") {
      return <TaichungKeyboard onWordKeyClick={onWordKeyClick} />;
    } else if (city === "Tainan") {
      return (
        <TainanKeyboard
          onWordKeyClick={onWordKeyClick}
          onMoreOptionsClick={onMoreOptionsClick}
          isOpen={isOpen}
        />
      );
    } else {
      return (
        <KaohsiungKeyboard
          onWordKeyClick={onWordKeyClick}
          onMoreOptionsClick={onMoreOptionsClick}
          isOpen={isOpen}
        />
      );
    }
  }
