import Header from "../components/Header";
import Footer from "../components/Footer";
import MainArea from "../components/MainArea";
import InfoNav from "../components/InfoNav";
import InfoList from "../components/InfoList";

import { ReactComponent as Info } from "../assets/Info.svg";
import { ReactComponent as Refresh } from "../assets/Refresh.svg";

import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

import { getBusRoute } from "../api/getBusRoute";
import { getBusStopOfRoute } from "../api/getDisplayStopOfRoute";
import { useState, useEffect } from "react";

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
  const [busRouteArr, setBusRoute] = useState([])
  const [busStopArr, setBusStop] = useState([])
  // const props = busStopArr.map((prop) => prop.Stops);
  // const [stops, setStops] = useState([...props]);
  const [selectedOption, setSelectedOption] = useState("")
  const name = useParams().name
  const route = useParams().route
  // console.log(name)
  const handleRefresh = () => {
    window.location.reload()
  }

  const handleNavChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSelectedOption(value)
    // if(value === "inbound"){
    //   const reverseProps = props.map((prop) => prop.reverse())
    //   // const reverseProps = props.map((prop) => prop.StopID)
    //   console.log(reverseProps)
    //   setStops(reverseProps)
    // } else {
    //   const normalProps = props.map((prop) => prop)
    //   console.log(normalProps)
    //   setStops(normalProps);
    // }
    // setSelectedOption(e.target.value)
  }
  useEffect(() => {
    const getBustRouteAsync = async () => {
      try {
        const busRoute = await getBusRoute(name, route);
        // console.log(busRoute)
        setBusRoute([busRoute[0]])
      } catch (error) {
        console.error(error);
      }
    }
    const getBusStopAsync = async () => {
      try {
        const busStopOfRoute = await getBusStopOfRoute(name, route);
        // console.log(busStopOfRoute);
        setBusStop([busStopOfRoute[0]])
      } catch (error) {
        console.error(error);
      }
    }
    getBustRouteAsync();
    getBusStopAsync();
  }, [])
  return (
    <div className="">
      <div className="flex-1 box-border">
        <Header>
          <div className="px-6 h-full flex justify-between items-center">
            <Link to={`/${name}`}>
              <div className="text-sm hover:font-bold">
                &#8249; 返回路線列表
              </div>
            </Link>
            <div className="font-bold text-lg">{route}</div>
            <div className="flex items-center">
              <Link to={`/${name}/${route}/route-info`}>
                <InfoSVG />
              </Link>
              <button
                className="ml-4"
                onClick={handleRefresh}
                selectedOption={selectedOption}
              >
                <RefreshSVG />
              </button>
            </div>
          </div>
        </Header>
        <MainArea height="h-[calc(100vh-60px)]">
          <div className="h-full overflow-y-scroll">
            {busRouteArr.map((route) => (
              <InfoNav
                route={route}
                key={route.RouteUID}
                onNavChange={handleNavChange}
              />
            ))}
            {/* <InfoList props={busStopArr}/> */}
            {busStopArr.map((props) => {
              // console.log(prop.Stops)
              return (<InfoList props={props.Stops} selectedOption={selectedOption}/>)
            })}
            {/* <InfoList props={stops} /> */}
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
