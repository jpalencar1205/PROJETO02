export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col min-h-full bg-red-100 justify-center items-center">
      <div>
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Calculadora</h1>
        <div className="border border-gray-950 p-10 rounded-xl ">
          <p>Digite seu número</p>
          <input defaultValue={256} type="number" className="border border-gray-500 px-4 py-2 text-blue-700 font-bold" />

          <div className="grid grid-cols-3 mt-8 gap-2">
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              +
            </button>
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              -
            </button>
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              C
            </button>
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              /
            </button>
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              X
            </button>
            <button type="button" className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg">
              =
            </button>
          </div>

          <div className="mt-6 border border-gray-600">
            <p className="text-gray-950 px-2 text-2xl">
              RESULTADO: <span className="font-black">18</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
