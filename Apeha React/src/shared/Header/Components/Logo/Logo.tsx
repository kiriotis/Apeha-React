import logo from "./../../../../assets/CrossedSwords.svg";
export function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-10 h-10 ">
        <img src={logo} alt="altLogo" />
      </div>
    </div>
  );
}
