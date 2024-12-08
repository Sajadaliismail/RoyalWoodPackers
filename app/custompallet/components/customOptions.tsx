interface CustomOptions {
  onSelect: (wizard: "wizardOne" | "wizardTwo") => void;
}
export const CustomOptions: React.FC<CustomOptions> = ({ onSelect }) => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-around w-full">
      {/* Custom Pallet */}
      <div
        className="w-80 h-80  transition-transform duration-1000 flex items-end justify-center  bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/HardWood.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient ">
          <button
            onClick={() => onSelect("wizardOne")}
            className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md"
          >
            Custom Pallet
          </button>
        </div>
      </div>

      {/* Custom Box */}
      <div
        className="w-80 h-80  transition-transform duration-1000  flex items-end justify-center bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/box.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient">
          <button
            onClick={() => onSelect("wizardTwo")}
            className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md"
          >
            Custom Box
          </button>
        </div>
      </div>

      {/* Custom Crate */}
      <div
        className="w-80 h-80  transition-transform duration-1000  flex items-end justify-center  bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/crate.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient">
          <button className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md">
            Custom Crate
          </button>
        </div>
      </div>
    </div>
  );
};
