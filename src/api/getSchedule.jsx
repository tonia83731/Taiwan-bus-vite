import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

// public test: https://ptx.transportdata.tw/MOTC

const baseUrl = "https://tdx.transportdata.tw/api/basic";
const scheduleUrl = "v2/Bus/Schedule/City";
const formatUrl = "?&$format=JSON";

// 取得指定[縣市],[路線名稱]的市區公車路線班表資料
export const getBusSchedule = async (city, route) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${scheduleUrl}/${city}/${route}${formatUrl}`,
      {
        headers: getAuthorizationHeader(),
      }
    );
    return res.data;
  } catch (error) {
    console.error("[Get bus schedule failed]:", error);
  }
}