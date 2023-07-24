import BusItem from "./BusItem";

export default function BusList() {
  return (
    <div className="h-full pt-10 pb-12 px-6 overflow-y-scroll">
      <ul className="z-0">
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
        <BusItem />
      </ul>
    </div>
  );
}
