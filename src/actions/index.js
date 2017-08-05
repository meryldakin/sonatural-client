export function fetchDemos() {

  console.log("hit fetch demos in actions")

  return function(dispatch){
    dispatch({type: "START_FETCH_DEMOS"});
    fetch("http://localhost:9000/demos")
      .then( res => res.json())
      .then(data => dispatch({type: "FETCH_DEMOS", payload: data }) )
    }
  }
