import Header from "../components/Header"

import { Link } from "react-router-dom";


export default function RouteMapPage(){
  return (
    <div className="">
      <Header>
        <div className="px-6 h-full grid gap-4 grid-cols-4 items-center relative">
          <Link to="/">
            <div className="text-sm hover:font-bold">&#8249; 返回</div>
          </Link>
          <div className="font-bold col-span-3 text-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            0南 路線圖
          </div>
        </div>
      </Header>
      {/* Google Map Here */}
      
    </div>
  );
}