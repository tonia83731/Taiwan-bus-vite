
import { styled } from "styled-components";

import MainArea from "../components/MainArea";
import HomeLink from "../components/HomeLink";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ReactComponent as BusIcon } from "../assets/BusIcon.svg";

const BusSVG = styled(BusIcon)`
  width: auto;
  height: 1.2em;
  path {
    fill: #fefefe;
  }
`;



export default function HomePage() {
  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="flex justify-center items-center">
            <div className="">
              <BusSVG />
            </div>
            <div className="font-bold ml-2 text-lg leading-[45px]">
              台灣搭公車
            </div>
          </div>
        </Header>
        <MainArea height="h-[calc(100vh-60px)]">
          <HomeLink />
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
