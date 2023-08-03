import InfoItem from "./InfoItem"


export default function InfoList({ props, selectedOption }) {
  const reverse = [...props].reverse();
  // console.log(props)
  // console.log(reverse)
  const array = selectedOption === "inbound" ? reverse : props;
  // console.log(array);
  return (
    <div className="pt-2 font-medium">
      <ul className="">
        {array.map((prop) => {
          return <InfoItem prop={prop} key={prop.RouteUID} />;
        })}
      </ul>
    </div>
  );
}
