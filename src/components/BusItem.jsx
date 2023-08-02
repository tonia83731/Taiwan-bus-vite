import { Link } from "react-router-dom"
import { styled } from "styled-components";

import { ReactComponent as Location } from "../assets/bus_Location.svg";

const LocationSVG = styled(Location)`
  width: auto;
  height: 1em;
  path {
    fill: rgb(104, 67, 55, 0.4);
  }
`;


export default function BusItem({prop}){
  let titleName = "";

  if (prop.City === "Taipei") {
    titleName = "台北";
  } else if (prop.City === "NewTaipei") {
    titleName = "新北";
  } else if (prop.City === "Taichung") {
    titleName = "台中";
  } else if (prop.City === "Tainan") {
    titleName = "台南";
  } else {
    titleName = "高雄";
  }

  return (
    <li className="rounded drop-shadow-lg my-2 bg-white-100 hover:border-2 hover:border-blue-20">
      <div className="py-2 px-4 block w-full">
        <div className="font-bold text-xl mb-2">
          {Object.values(prop.RouteName)[0]}
        </div>
        <div className="text-base flex justify-between">
          <div className="text-brown-60">
            {prop.DepartureStopNameZh} &#8646; {prop.DestinationStopNameZh}
          </div>
          <div className="text-brown-40 flex items-center">
            <LocationSVG />
            <span className="ml-1">{titleName}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

// export default function BusItem({prop}){
//   return (
//     <li className="rounded drop-shadow-lg my-2 bg-white-100 hover:border-2 hover:border-blue-20">
//       <div className="font-bold text-xl mb-2">0南</div>
//       <div className="text-base flex justify-between">
//         <div className="text-brown-60">萬芳社區 &#8646; 捷運東門站</div>
//         <div className="text-brown-40 flex items-center">
//           <LocationSVG />
//           <span className="ml-1">台北</span>
//         </div>
//       </div>
//     </li>
//   );
// }