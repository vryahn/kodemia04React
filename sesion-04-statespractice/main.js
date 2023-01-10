const {useState} = React;

function App() {
	const [count, setCount] = useState(0)
  const [string,setString] = useState("")

	const substract = () => {
		//if(count > 0)
    	setCount(count - 1)
		}
    
	const add = () => {
		//if(count < 5)
    	setCount(count + 1)
		}
    
    const clearCounter = () => {
  	setCount(0)
  }
   
  const showMessage = (event) => {
  	setString(event.target.value);
    //console.log(event.target)
	  }
  
  const clearshowMessage = (event) => {
  	setString("")
  }
  

    
  return (
    <div>
      <button onClick={substract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <button onClick={clearCounter}>Clear Count</button>
      <article>
        <input
          onChange={showMessage}
          type="text"
          value={string}
          placeholder=""
          />
        <p>{string}</p>
        <button onClick={clearshowMessage}>Clear</button>
      </article>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root') );