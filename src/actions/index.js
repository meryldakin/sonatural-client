export function fetchDemos() {
  return function(dispatch) {
    dispatch({ type: "START_FETCH_DEMOS" });
    fetch("http://localhost:9000/demos")
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_DEMOS", payload: data }));
  };
}

export function addDemo(params) {
  console.log("hit add demo in actions", params);
}
