import './App.css'

function App() {
  let name = "Vihan Anand";
  let l = [10, 20, 30, 40];
  let obj = {
    'name' : 'Vihan Anand',
    'company' : "Microsodft",
    'age' : 20
  };
  let age = 20;
  return (
    <>
      <div className='App'>
        <h1>{name}</h1>
        {
          l.map((v)=>{
            return (<div>{v}</div>)
          })
        }
        <div>{obj.company}</div>
        {age > 18 ? <div>Can vote!!</div> : <div>Cannot vote!!</div>}
      </div>
    </>
  )
}

export default App;
