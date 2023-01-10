const {useState} = React;

function App() {
	const [string,setString] = useState("")

	const showMessage = (event) => {
  	setString(event.target.value);
    //console.log(event.target)
	}

  return (
    <div>
     <select onChange={showMessage}>
       <option value="one">one</option>
       <option value="two">two</option>
       <option value="three">three</option>
       <option value="four">four</option>
     </select>
     <p>{string}</p>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root') );