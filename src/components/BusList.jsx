import BusItem from "./BusItem";
import { Link } from "react-router-dom";

export default function BusList({inputValue, onBusChange, props}) {
  return (
    <div className="h-full pt-10 pb-12 px-6 overflow-y-scroll">
      <input
        type="text"
        className="w-full h-[40px] border-2 rounded mb-2 px-2"
        value={inputValue}
        onChange={onBusChange}
      />
      <ul className="z-0">
        {props.map((prop) => {
          const route = Object.values(prop.RouteName)[0];
          // {`/list/${prop.City}/${route}`}
          return (
            <Link to={`/${prop.City}/${route}`}>
              <BusItem prop={prop} key={prop.RouteUID} />
            </Link>
          );
        })}
        {/* <BusItem />
        <BusItem /> */}
      </ul>
    </div>
  );
}
