import Login, { Profile, Setting, Userkey } from "./UserComponent";

function App() {
  return (
    <div>
      <h1>Importing and Exporting Components</h1>
      <Login/>
      <Profile/>
      <Setting/>
      <h1>{Userkey}</h1>
      {Userkey}
    </div>
  )
}


export default App;