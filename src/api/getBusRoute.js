import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

const baseUrl = "https://ptx.transportdata.tw/MOTC";
const routeUrl = "v2/Bus/Route/City";
const formatUrl = "?&$format=JSON";

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