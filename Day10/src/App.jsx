function App() {

  function callfun() {
    alert("function call");
  }

  const fruit = (name) => {
    alert(name);
  }

  return (
    <>
      <h1>Event and function call</h1>
      <button onClick={callfun}>Click Me</button>
      <button onClick={()=>fruit("apple")}>Click Me1</button>
      <button onClick={()=>fruit("banana")}>Click Me2</button>
    </>
  )
}

export default App;