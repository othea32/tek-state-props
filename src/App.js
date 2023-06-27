import Card from "./Card";
import Child from "./Child";

function App() {

  const data = [
    {name:'lisa',age:30, job:'frontend-engineer'},
    {name:'tim',age:40, job:'backend-engineer'},
    {name:'john',age:50, job:'system-engineer'},
  ];



  return (
    <div className="App">
      <Card data={data}/>
      <Child />
    </div>
  );
};

export default App;
