import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="container calculator">
      <div className="m-10 box-shadow rounded-md">
        <div className="flex justify-end items-end text-5xl w-full output text-white rounded-t-md h-36 pr-2 pb-1">
          0
        </div>
        <div className="grid grid-cols-4 divide-x divide-y rounded-b-md">
          <Button>C</Button>
          <input className="gray-operator" type="button" value="+/-" />
          <input className="gray-operator" type="button" value="%" />
          <input className="orange-operator" type="button" value="/" />
          <input className="p-6" type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input className="orange-operator" type="button" value="x" />
          <input className="p-6" type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input className="orange-operator" type="button" value="-" />
          <input className="p-6" type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input className="orange-operator" type="button" value="+" />
          <input className="p-6 rounded-bl-md" type="button" value="0" />
          <input type="button" value="." />
          <input type="button" value="<-" />
          <input className="orange-equal rounded-br-md" type="button" value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
