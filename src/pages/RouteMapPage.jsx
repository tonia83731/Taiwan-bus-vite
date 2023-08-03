import Header from "../components/Header";
import MainArea from "../components/MainArea";

import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { loadGoogleMapsAPI } from "google-maps-api-loader";
import { getBusStopOfRoute } from "../api/getDisplayStopOfRoute";
import { useState, useEffect } from "react";

export default function RouteMapPage() {
  const name = useParams().name;
  const route = useParams().route;
  const stop = useParams().stop
  const [busStop, setBusStop] = useState([])
  const [busPosition, setBusPosition] = useState([])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const stopsArr = busStop.map((props) => {
    return props.Stops
  })
  
  // console.log(stopsArr)
  
  

  useEffect(() => {
    const getBustStopOfRouteAsync = async () => {
      try {
        const busStopOfRoute = await getBusStopOfRoute(name, route);
        // console.log(busStopOfRoute);
        setBusStop([busStopOfRoute[0]]);
      } catch (error) {
        console.error(error);
      }
    };
   
    getBustStopOfRouteAsync();
  }, []);

  // console.log(busStop)
  return (
    <div className="">
      <Header>
        <div className="px-6 h-full grid gap-4 grid-cols-4 items-center relative">
          <Link to={`/${name}/${route}`}>
            <div className="text-sm hover:font-bold">&#8249; 返回</div>
          </Link>
          <div className="font-bold col-span-3 text-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {route} {stop}站 位置圖
          </div>
        </div>
      </Header>
      {/* Google Map Here */}
      <MainArea>{isLoaded ? <Map /> : <div>Loading...</div>}</MainArea>
    </div>
  );
}

function Map() {
  const center = useMemo(() => ({
    lat: 25.033671,
    lng: 121.564427,
  }));


  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-[calc(100vh-45px)]"
    >
      <MarkerF position={{
        lat: 25.033671,
        lng: 121.564427,
      }}/>
    </GoogleMap>
  );
}
