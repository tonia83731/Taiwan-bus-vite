// /v2/Bus/EstimatedTimeOfArrival/Streaming/City/{City}/{RouteName}

import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

const baseUrl = "https://tdx.transportdata.tw/api/basic";
const estimateUrl = "v2/Bus/EstimatedTimeOfArrival/City";
const formatUrl = "?&$format=JSON";

// 取得預估到站資料[批次更新]
export const getBusEstimateArrival = async (city, route) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${estimateUrl}/${city}/${route}${formatUrl}`,
      {
        headers: getAuthorizationHeader(),
      }
    );
    return res.data;
  } catch (error) {
    console.error("[Get bus estimate arrival failed]:", error);
  }
};