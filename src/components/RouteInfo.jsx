import { MakeTime } from "../api/utilities/MakeTime";
import { FormatTime } from "../api/utilities/FormatTime";
import { useParams } from "react-router-dom";

export default function RouteInfo({ prop }) {
  const sub = prop.SubRoutes[0];
  // console.log(sub)

  const name = useParams().name;
  console.log(name);

  let price = "";

  if (name === "Taipei") {
    price = "全票每段15元, 學生使用悠遊卡者享有8折優惠(即每段次12元)";
  } else if (name === "NewTaipei") {
    price =
      "全票每段15元, 學生使用悠遊卡者享有8折優惠(即每段次12元), 老殘孩童優待票每段次新臺幣8元";
  } else if (name === "Taichung") {
    price =
      "基本里程8公里以內(全票20元、半票11元)，超過8公里以上則全票=2.431x實際里程x(1+5%營業稅)(四捨五入)、半票=全票x50%(四捨五入)收費";
  } else if (name === "Tainan") {
    price =
      "持電子票證（市民卡、一卡通、悠遊卡、iCash 2.0）搭乘幹支線公車（綠、藍、棕、橘、黃、紅）享基本里程26元免費";
  } else {
    price =
      "刷卡搭公車里程8公里以內算一段票，全票12元，半票6元，學生票10元(限具有照片且在效期內之數位學生證及高雄學生認同卡)";
  }

  return (
    <div className="h-full pt-10 pb-12 px-6 overflow-y-scroll">
      <div className="">
        <div className="font-bold bg-green-20 px-4 py-2">收費方式</div>
        <div className="text-sm px-6 pt-2">
          {prop.TicketPriceDescriptionZh}
        </div>
        <div className="text-sm px-6">{price}</div>
      </div>
      <div className="py-2">
        <div className="font-bold bg-green-20 px-4 py-2">平日發車資訊</div>
        <div className="text-sm px-6 pt-2">
          {/* {FormatTime(sub.FirstBusTime)} ~ {FormatTime(sub.LastBusTime)} */}
          {sub.FirstBusTime} ~ {sub.LastBusTime}
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold bg-green-20 px-4 py-2">假日發車資訊</div>
        <div className="text-sm px-6 pt-2">
          {/* {FormatTime(sub.HolidayFirstBusTime)} ~
          {FormatTime(sub.HolidayLastBusTime)} */}
          {sub.HolidayFirstBusTime} ~ {sub.HolidayLastBusTime}
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold bg-green-20 px-4 py-2">路線圖資訊</div>
        <a href=""></a>
        <div className="text-sm px-6 pt-2">
          <a href={prop.RouteMapImageUrl} className="hover:underline">
            {prop.RouteMapImageUrl}
          </a>
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold bg-green-20 px-4 py-2">最後更新時間</div>
        <div className="text-sm px-6 pt-2">{MakeTime(prop.UpdateTime)}</div>
      </div>
    </div>
  );
}
