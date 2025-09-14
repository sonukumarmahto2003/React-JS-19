function App(){
  function callFun(){
    alert("function called");
  }
  return(
    <>
    <h1>JSX Exercise</h1>
      <h1>Sonu Kumar</h1>
      <img src="https://images.unsplash.com/photo-1757608317604-a124f9930c67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ravina tandan" width="300px" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </>
  )
}

export default App;