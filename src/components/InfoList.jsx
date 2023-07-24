import InfoItem from "./InfoItem"


export default function InfoList(){
  return (
    <div className="pt-2 font-medium">
      <ul className="">
        <InfoItem />
        <InfoItem />
        <InfoItem />
        <InfoItem />
        <InfoItem />
        <InfoItem />
      </ul>
    </div>
  );
}