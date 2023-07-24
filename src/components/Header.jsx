



export default function Header({children}){
  return (
    <header className="bg-blue-100 text-white-100 w-full h-[45px] leading-[45px] fixed top-0 z-50">
      {children}
    </header>
  );
}