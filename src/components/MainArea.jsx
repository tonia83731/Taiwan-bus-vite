



export default function MainArea({children, height}){
  return (
    <main className={`${height} pt-[45px] z-1`}>{children}</main>
  );
}