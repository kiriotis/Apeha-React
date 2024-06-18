import logo from "./../../../../assets/github.svg";
export function GitLogo() {
  return (
    <div className="flex justify-start items-center">
      <div className=" w-10 h-10 ">
        <img src={logo} alt="altLogo" />
      </div>
    </div>
  );
}
