import BusItem from "./BusItem";
import { Link } from "react-router-dom";

export default function BusList({inputValue, onBusChange, onBusClick, props, cityName}) {
  // ${cityName === "NewTaipei" ? 'w-[75%]' : 'w-full'}
  return (
    <div className="h-full pt-10 pb-12 px-6 overflow-y-scroll">
      <form action="" className="flex justify-between">
        <input
          type="text"
          className={`
          w-full 
          h-[40px] border-2 rounded mb-2 px-2`}
          value={inputValue}
          onChange={onBusChange}
          disabled={cityName !== "NewTaipei"}
        />
        {/* {cityName === "NewTaipei" && (
          <button
            className="w-[20%] rounded bg-gold-40 h-[40px]"
            onClick={onBusClick}
          >
            搜尋
          </button>
        )} */}
      </form>
      <ul className="z-0">
        {props.map((prop) => {
          const route = Object.values(prop.RouteName)[0];
          // {`/list/${prop.City}/${route}`}
          return (
            <Link to={`/${prop.City}/${route}`} key={prop.RouteUID}>
              <BusItem prop={prop} />
            </Link>
          );
        })}
        {/* <BusItem />
        <BusItem /> */}
      </ul>
    </div>
  );
}
