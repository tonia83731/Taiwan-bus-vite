import { Link, useParams } from "react-router-dom";

export default function InfoItem({prop}){
  const stop = Object.values(prop.StopName)[0];
  const name = useParams().name
  const route = useParams().route

  // console.log(name, route)
  return (
    <>
      <li className="border-b border-black-20 px-6 py-2" data-status="">
        <Link to={`/${name}/${route}/route-map/${stop}`} className="flex justify-between text-center">
          <div className="font-bold py-1 min-w-[150px]">
            <div className="overflow-hidden whitespace-nowrap text-ellipsis text-left">
              {stop}
            </div>
          </div>
          <div className="bg-green-60 text-white-80 font-bold min-w-[96px] px-4 py-1 rounded">
            21分
          </div>
        </Link>
      </li>
    </>
  );
}


{/* <li className="border-b border-black-20 px-6 py-2" data-status="">
  <Link to="" className="flex justify-between text-center">
    <div className="font-bold py-1 min-w-[150px]">
      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
        信義永康街口(捷運東門站)
      </div>
    </div>
    <div className="bg-slate-500 text-slate-400 font-bold min-w-[96px] px-4 py-1 rounded">
      尚未發車
    </div>
  </Link>
</li>; */}


{/* <li className="border-b border-black-20 px-6 py-2" data-status="">
  <Link to="" className="flex justify-between text-center">
    <div className="font-bold py-1 min-w-[150px]">
      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
        信義永康街口(捷運東門站)
      </div>
    </div>
    <div className="bg-red-80 text-white-80 font-bold min-w-[96px] px-4 py-1 rounded">
      即將進站
    </div>
  </Link>
</li>; */}