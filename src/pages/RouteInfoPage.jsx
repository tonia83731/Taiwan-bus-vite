import Header from "../components/Header";
import Footer from "../components/Footer";
import MainArea from "../components/MainArea";
import RouteInfo from "../components/RouteInfo";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBusRoute } from "../api/getBusRoute";

export default function RouteInfoPage() {
  const [busRouteArr, setBusRoute] = useState([]);
  const name = useParams().name;
  const route = useParams().route;

  useEffect(() => {
    const getBustRouteAsync = async () => {
      try {
        const busRoute = await getBusRoute(name, route);
        console.log(busRoute);
        setBusRoute([busRoute[0]]);
      } catch (error) {
        console.error(error);
      }
    };
    getBustRouteAsync();
  }, []);
  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="px-6 h-full grid gap-4 grid-cols-4 items-center relative">
            <Link to={`/${name}/${route}`}>
              <div className="text-sm hover:font-bold">&#8249; 返回</div>
            </Link>
            <div className="font-bold col-span-3 text-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              {route} 路線資訊
            </div>
          </div>
        </Header>
      </div>
      <MainArea height="h-[calc(100vh-60px)]">
        {busRouteArr.map((prop) => {
          return (<RouteInfo prop={prop} key={prop.RouteUID} />)
        })}
      </MainArea>
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
