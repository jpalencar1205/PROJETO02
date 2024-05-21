import Calculadora from './components/Calculadora';

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col min-h-full bg-red-100 justify-center items-center">
      <div>
        <center>
          <h1 className="text-4xl text-gray-900 font-bold mb-4">CALCULADORA</h1>
        </center>
        <Calculadora />
      </div>
    </div>
  );
}
