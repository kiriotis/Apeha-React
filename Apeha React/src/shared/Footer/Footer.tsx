import { GitLogo } from "./Components/Git/GitComponent";
import { Age } from "./Components/Time/TimeComponent";

export function Footer() {
  return (
    <div className="absolute bottom-0 w-600  grid grid-rows-1 grid-cols-2 p-4 border-2 border-slate-600 rounded-xl shadow-2xl">
      <GitLogo />
      <Age />
    </div>
  );
}
