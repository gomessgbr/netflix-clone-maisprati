import logo from "../../assets/svgs/netflix-logo.svg";
import backgroundImage from "../../assets/background-image.jpg";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()
  return (
    <div className="relative min-h-screen min-w-screen">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "contain",

          zIndex: -1,
        }}
      />
      <div>
        <div className="xl:mx-32 mx-0 xl:px-10 px-8 py-6">
          <img src={logo} alt="logo" className="lg:w-36 w-20" />
        </div>
        <div className="grid">
          <div
            className="md:min-w-[450px] min-w-full min-h-[700px] sm:py-12 py-0 px-[5%] sm:m-auto m-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <header>
              <p className="text-white text-4xl font-sans font-bold mb-7">
                Entrar
              </p>
            </header>
            <form
              action=""
              className="flex flex-col flex-1 gap-4 text-white font-sans "
            >
              <input
                type="text"
                placeholder="Email ou número de celular"
                className=" w-full border-[1px] border-slate-400  bg-transparent px-4 py-4"
              />

              <p></p>
              <input
                type="password"
                placeholder="Senha"
                className=" border-[1px] border-slate-400  bg-transparent px-4 py-4"
              />
              <p></p>

              <button
                type="button"
                className="min-w-full min-h-10 bg-[#e50914d9] text-white text-base px-4 py-[6px] rounded-sm  hover:bg-[#B41123]"
                onClick={()=>{navigate("/home")}}
              >
                Entrar
              </button>
              <p className="font-normal text-center text-white/70">OU</p>
              <button
                type="button"
                className=" min-w-full min-h-10 bg-[#808080]/30 text-white text-base px-4 py-[6px] rounded-sm hover:bg-[#808080]/20 "
              >
                Usar um código de acesso
              </button>
              <a
                href="#"
                className="cursor-pointer  hover:underline text-center"
              >
                Esqueceu a senha?
              </a>
            </form>
            <footer className="text-white mt-5">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name=""
                  id="remeberme"
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="remeberme" className="ms-2 text-sm font-medium dark:text-gray-300">Lembre-se de mim</label>
              </div>
              <p>
                Novo por aqui? <a href="">Assine agora</a>
              </p>
            </footer>
          </div>
        </div>

        <footer></footer>
      </div>
    </div>
  );
}
