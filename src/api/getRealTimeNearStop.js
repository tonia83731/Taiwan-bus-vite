// /v2/Bus/RealTimeNearStop/Streaming/City/{City}/{RouteName}

import axios from "axios";
import getAuthorizationHeader from "./getAuthorizationHeader1";

const baseUrl = "https://ptx.transportdata.tw/MOTC";
// const routeUrl = "v2/Bus/Route/City";
const formatUrl = "?&$format=JSON";