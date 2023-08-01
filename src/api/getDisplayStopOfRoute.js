// /v2/Bus/DisplayStopOfRoute/City/{City}/{RouteName}
// /v2/Bus/StopOfRoute/City/{City}/{RouteName}

import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

const baseUrl = "https://tdx.transportdata.tw/api/basic";
const stopUrl = "v2/Bus/StopOfRoute/City";
const formatUrl = "?&$format=JSON";

// 取得路線的站序資料(座標)
export const getBusStopOfRoute = async (city, route) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${stopUrl}/${city}/${route}${formatUrl}`,
      {
        headers: getAuthorizationHeader(),
      }
    );
    return res.data;
  } catch (error) {
    console.error("[Get bus stop of route failed]:", error);
  }
};