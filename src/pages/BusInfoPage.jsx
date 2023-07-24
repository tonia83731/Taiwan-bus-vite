import Header from "../components/Header";
import Footer from "../components/Footer";
import MainArea from "../components/MainArea";
import InfoNav from "../components/InfoNav";
import InfoList from "../components/InfoList";

import { ReactComponent as Info } from "../assets/Info.svg";
import { ReactComponent as Refresh } from "../assets/Refresh.svg";

import { Link } from "react-router-dom";
import { styled } from "styled-components";

const InfoSVG = styled(Info)`
  width: auto;
  height: 1.2em;
  path {
    fill: #fefefe;
  }
`;
const RefreshSVG = styled(Refresh)`
  width: auto;
  height: 1.2em;
  path {
    fill: #fefefe;
  }
`;

export default function BusInfoPage() {
  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="px-6 h-full flex justify-between items-center">
            <Link to="">
              <div className="text-sm hover:font-bold">&#8249; 返回路線列表</div>
            </Link>
            <div className="font-bold text-lg">0南</div>
            <div className="flex items-center">
              <Link to="">
                <InfoSVG />
              </Link>
              <button className="ml-4">
                <RefreshSVG />
              </button>
            </div>
          </div>
        </Header>
        <MainArea height="h-[calc(100vh-60px)]">
          <div className="h-full overflow-y-scroll">
            <InfoNav />
            <InfoList />
          </div>
        </MainArea>
      </div>
      <Footer>
        &#169;2023 -
        <a href="https://data.gov.tw/" className="hover:underline">
          DATA.GOV.TW
        </a>
        - All Rights Reserved
      </Footer>
    </div>
  );
}
