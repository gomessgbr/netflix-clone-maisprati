import logo from "../../assets/svgs/netflix-logo.svg";

export function Brand() {
  return (
    <div className="xl:mx-32 mx-0 xl:px-10 px-8 py-6">
      <img src={logo} alt="logo" className="lg:w-36 w-20" />
    </div>
  );
}
