import BusItem from "./BusItem";

export default function BusList({inputValue, onBusChange}) {
  return (
    <div className="h-full pt-10 pb-12 px-6 overflow-y-scroll">
      <input type="text" className="w-full h-[40px] border-2 rounded mb-2 px-2" value={inputValue} onChange={onBusChange}/>
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
