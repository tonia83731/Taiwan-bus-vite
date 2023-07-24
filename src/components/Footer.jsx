import { Children } from "react";


export default function Footer({children}){
  return (
    <footer className="bg-blue-100 text-white-100 w-full h-[60px] leading-[60px] text-xs text-center">
      {children}
    </footer>
  );
}