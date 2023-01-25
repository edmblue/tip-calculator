import Logo from './assets/images/logo.svg';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="mt-10">
        <img src={Logo} alt="" aria-hidden="true" />
      </div>
      <main className="mt-10 w-full bg-white rounded-t-3xl p-7 md:w-1/2 md:rounded-3xl ">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
