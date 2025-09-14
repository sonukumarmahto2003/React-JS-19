import Login, { Profile, Setting, Userkey, variable } from "./UserComponent";

function App() {
  return (
    <div>
      <h1>Importing and Exporting Components</h1>
      <Login/>
      <Profile/>
      <Setting/>
      <h1>{Userkey}</h1>
      {Userkey}
      {variable}
    </div>
  )
}


export default App;