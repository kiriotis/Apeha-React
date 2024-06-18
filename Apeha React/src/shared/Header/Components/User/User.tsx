import UserLogo from "./.,/../../../../../assets/userLogo.svg";
import MoreLogo from "./.,/../../../../../assets/moreSvg.svg";

export function User() {
  return (
    <div className="flex flex-row gap-2 items-center justify-end ">
      <div className="w-10 h-10 flex items-center justify-center ">
        <img src={MoreLogo} alt="AltMore" />
      </div>
      <div className="w-10 h-10 ">
        <img src={UserLogo} alt="AltUser" />
      </div>
    </div>
  );
}
