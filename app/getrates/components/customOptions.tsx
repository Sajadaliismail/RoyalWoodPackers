interface CustomOptions {
  onSelect: (wizard: "wizardOne" | "wizardTwo"|'wizardThree') => void;
}
export const CustomOptions: React.FC<CustomOptions> = ({ onSelect }) => {
  return (
    <div className="w-full">
      <h1 className="text-center sm:text-4xl mb-8 text-xl">
      Get Custom Pricing Based on Your Unique Measurements
      </h1 >
      <hr
      style={{
        border: 'none',
        borderTop: '2px solid #333',
        margin: '20px 0',
      }}
    />
    <div className="flex sm:flex-row sm:mt-16 flex-col gap-3 items-center justify-around w-full">

      {/* Custom Pallet */}
      <div>
      <div
        className="w-80 h-80  transition-transform duration-1000 flex items-end justify-center  bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/HardWood.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient ">
          <button
            onClick={() => onSelect("wizardOne")}
            className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md"
          >
            Get Pallet Rates
          </button>
        </div>
      </div>
     <p className="text-wrap w-80 text-center text-sm my-3">Find customized pricing for pallets based on your measurements and specifications.</p>
      </div>

      {/* Custom Box */}
      <div>
      <div
        className="w-80 h-80  transition-transform duration-1000  flex items-end justify-center bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/box.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient">
          <button
            onClick={() => onSelect("wizardTwo")}
            className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md"
          >
            Get Box Rates
          </button>
        </div>
      </div>
     <p className="text-wrap w-80 text-center text-sm my-3">Get personalized box pricing tailored to your custom size and requirements.</p>

      </div>

      {/* Custom Crate */}
      <div>

      <div
        className="w-80 h-80  transition-transform duration-1000  flex items-end justify-center  bg-contain bg-no-repeat bg-center relative rounded-lg"
        style={{ backgroundImage: "url('/crate.png')" }}
      >
        <div className="relative p-0.5 hover:scale-110 hover:translate-y-4 transition-all duration-700 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg bg-[length:200%_200%] animate-gradient">
          <button 
           onClick={() => onSelect("wizardThree")}
          className="h-10 px-4  border-  shadow-xl bg-slate-900 text-white rounded-md">
            Get Crate Rates
          </button>
        </div>
      </div>
    <p className="text-wrap w-80 text-center text-sm my-3">Calculate crate prices according to your specific dimensions and needs.</p>
    </div>
    </div>

    </div>
  );
};
