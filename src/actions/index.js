const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6cc3f55dfbfa4584bb2154421210308&q=${place}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

const toggleTheme=()=>{
    return {
        type:"TOGGLE_THEME",
    }
}

export { updatePlace, updatePlaceData ,toggleTheme};
