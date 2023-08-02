import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { ReactComponent as Taipei } from "../assets/bus_Taipei.svg";
import { ReactComponent as NewTaipei } from "../assets/bus_NewTaipei.svg";
import { ReactComponent as Taichung } from "../assets/bus_Taichung.svg";
import { ReactComponent as Tainan } from "../assets/bus_Tainan.svg";
import { ReactComponent as Kaohsiung } from "../assets/bus_kaohsiung.svg";

const TaipeiSVG = styled(Taipei)`
  width: auto;
  height: 2em;
`;
const NewTaipeiSVG = styled(NewTaipei)`
  width: auto;
  height: 2em;
`;
const TaichungSVG = styled(Taichung)`
  width: auto;
  height: 2em;
`;
const TainanSVG = styled(Tainan)`
  width: auto;
  height: 2em;
`;
const KaohsiungSVG = styled(Kaohsiung)`
  width: auto;
  height: 2em;
`;

const BtnData = [
  {
    id: 1,
    linkTo: "Taipei",
    icon: <TaipeiSVG />,
    name: "台北等公車",
    color: "bg-red-80",
    color_hover: "bg-red-100",
  },
  {
    id: 2,
    linkTo: "NewTaipei",
    icon: <NewTaipeiSVG />,
    name: "新北等公車",
    color: "bg-orange-80",
    color_hover: "bg-orange-100",
  },
  {
    id: 3,
    linkTo: "Taichung",
    icon: <TaichungSVG />,
    name: "台中等公車",
    color: "bg-yellow-80",
    color_hover: "bg-yellow-100",
  },
  {
    id: 4,
    linkTo: "Tainan",
    icon: <TainanSVG />,
    name: "台南等公車",
    color: "bg-brown-80",
    color_hover: "bg-brown-100",
  },
  {
    id: 5,
    linkTo: "Kaohsiung",
    icon: <KaohsiungSVG />,
    name: "高雄等公車",
    color: "bg-gold-80",
    color_hover: "bg-gold-100",
  },
];

export default function HomeLink() {
  const BtnDataList = BtnData.map((btn) => {
    return (
      <Link
        to={`/${btn.linkTo}`}
        className={`flex justify-center items-center ${btn.color} block w-full min-h-[45px] rounded py-2 text-center drop-shadow-md hover:${btn.color_hover} hover:font-bold`}
      >
        <span>{btn.icon}</span>
        <span className="ml-2">{btn.name}</span>
      </Link>
    );
  });
  return (
    <div className="h-full pt-10 pb-12 px-6 text-white-100 grid gap-4 grid-rows-5">
      {BtnDataList}
    </div>
  );
}

