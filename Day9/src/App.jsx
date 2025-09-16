function App() {
  const name = "Sonu Kumar";
  const userObj = {
    name: "sonu kumar",
    email: "sonu@gmail.com",
    age: 22,
  }

  const userArray=['sam','peter','bruce'];

  let path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIG32Y_629Q_YhIrkrWf8iMjGWCDZZQ4xeA&s"


  let x=10;
  let y=20;

  function fruit(){
    return "Apple";
  }

  function sum(a,b){
    return a+b;
  }

  function operation(a,b,op){
    if(op=="+"){
      return a+b;
    }else if(op=="-"){
      return a-b;
    }else {
      return a*b;
    }
  }
  return(
    <>
       <h1>JSX with Curly Braces</h1>
       <h1>{name?name:"user not found"}</h1>
       <h1>{x+y}</h1>
       <h1>{fruit()}</h1>
       <h1>{sum(10, 100)}</h1>
       <h1>{operation(20,10,"")}</h1>
       <h1>{userObj.email}</h1>
       <h1>{userArray[0]}</h1>
       <input type="text" value={name} />
       <br />
       <img src={path} alt="" />
    </>
  )
}

export default App;