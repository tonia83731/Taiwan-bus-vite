import InfoItem from "./InfoItem"


export default function InfoList({props}){
  // console.log(props);
  return (
    <div className="pt-2 font-medium">
      <ul className="">
        {
          props.map((prop) => {
            return <InfoItem prop={prop} key={prop.RouteUID}/>;
          })
        }
        
      </ul>
    </div>
  );
}