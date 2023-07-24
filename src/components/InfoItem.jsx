import { Link } from "react-router-dom";

export default function InfoItem(){
  return (
    <>
      <li className="border-b border-black-20 px-6 py-2" data-status="">
        <Link to="" className="flex justify-between text-center">
          <div className="font-bold py-1 min-w-[150px]">
            <div className="overflow-hidden whitespace-nowrap text-ellipsis">
              信義永康街口(捷運東門站)
            </div>
          </div>
          <div className="bg-green-60 text-white-80 font-bold min-w-[96px] px-4 py-1 rounded">
            21分
          </div>
        </Link>
      </li>
      {/* for  */}
      <li className="border-b border-black-20 px-6 py-2" data-status="">
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
      </li>
      <li className="border-b border-black-20 px-6 py-2" data-status="">
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
      </li>
    </>
  );
}