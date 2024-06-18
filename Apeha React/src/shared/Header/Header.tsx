import { Logo } from "./Components/Logo/Logo";
import { Nav } from "./Components/Nav/nav";
import { User } from "./Components/User/User";

export function Header() {
  return (
    <div className="grid grid-rows-1 grid-cols-3 p-4 border-2 border-slate-600 rounded-xl shadow-2xl  ">
      <Nav />
      <Logo />
      <User />
    </div>
  );
}
