import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

const baseUrl = "https://tdx.transportdata.tw/api/basic";
const routeUrl = "v2/Bus/Route/City";
const formatUrl = "?&$format=JSON";

// 取得市區所有公車路線
export const getBusCity = async (city) => {
  try {
    const res = await axios.get(`${baseUrl}/${routeUrl}/${city}${formatUrl}`, {
      headers: getAuthorizationHeader(),
    });
    return res.data;
  } catch (error) {
    console.error("[Get bus city failed]:", error);
  }
};

// 取得路線資訊(營運業者、車牌號碼、票價)
export const getBusRoute = async (city, route) => {
  try {
    const res = await axios.get(`${baseUrl}/${routeUrl}/${city}/${route}${formatUrl}`, {
      headers: getAuthorizationHeader(),
    });
    return res.data;
  } catch (error) {
    console.error("[Get bus routes failed]:", error);
  }
}

// Taipei
// export const getTaipeiRoute = async() => {
//   try{
//     const res = await axios.get(`${baseUrl}/${routeUrl}/Taipei${formatUrl}`, 
//       {
//         headers: getAuthorizationHeader()
//       }
//     )
//     return res.data
//   } catch(error){
//     console.error('[Get Taipei routes failed]:', error)
//   }
// }

// NewTaipei
// export const getNewTaipeiRoute = async() => {
//   try {
//     const res = await axios.get(`${baseUrl}/${routeUrl}/NewTaipei${formatUrl}`, {
//       headers: getAuthorizationHeader(),
//     });
//     return res.data;
//   } catch (error) {
//     console.error("[Get NewTaipei routes failed]:", error);
//   }
// }

// Taichung
// export const getTaichungRoute = async() => {
//   try {
//     const res = await axios.get(`${baseUrl}/${routeUrl}/Taichung${formatUrl}`, {
//       headers: getAuthorizationHeader(),
//     });
//     return res.data;
//   } catch (error) {
//     console.error("[Get Taichung routes failed]:", error);
//   }
// }

// Tainan
// export const getTainanRoute = async () => {
//   try {
//     const res = await axios.get(`${baseUrl}/${routeUrl}/Tainan${formatUrl}`, {
//       headers: getAuthorizationHeader(),
//     });
//     return res.data;
//   } catch (error) {
//     console.error("[Get Tainan routes failed]:", error);
//   }
// };

// Kaohsiung
// export const getKaohsiungRoute = async () => {
//   try {
//     const res = await axios.get(
//       `${baseUrl}/${routeUrl}/Kaohsiung${formatUrl}`,
//       {
//         headers: getAuthorizationHeader(),
//       }
//     );
//     return res.data;
//   } catch (error) {
//     console.error("[Get Kaohsiung routes failed]:", error);
//   }
// };