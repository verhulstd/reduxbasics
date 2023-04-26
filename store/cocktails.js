/**
 * TYPES
 */
const SET_COCKTAILS_SEARCHVALUE = "SET_COCKTAILS_SEARCHVALUE";
const SEARCH_COCKTAILS_LOADING = "SEARCH_COCKTAILS_LOADING";
const SET_COCKTAILS = "SET_COCKTAILS";

/**
 * INITIALSTATE
 */
const initialState = {
  searchValue: "",
  loading: false,
  cocktails: [],
};
/**
 * REDUCER
 */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COCKTAILS_SEARCHVALUE:
      return { ...state, searchValue: payload };
    case SEARCH_COCKTAILS_LOADING:
      return { ...state, loading: payload };
    case SET_COCKTAILS:
      return { ...state, cocktails: payload };
    default:
      return state;
  }
};

/**
 * ACTIONCREATORS
 */
const setSearchValue = (str) => ({
  type: SET_COCKTAILS_SEARCHVALUE,
  payload: str,
});
const searchCocktailsLoading = (bool) => ({
  type: SEARCH_COCKTAILS_LOADING,
  payload: bool,
});
const setCocktails = (arr) => ({
  type: SET_COCKTAILS,
  payload: arr,
});

export const searchCocktails = function (str) {
  return async function (dispatch, getState) {
    dispatch(setSearchValue(str));
    dispatch(searchCocktailsLoading(true));
    const resp = await fetch(
      "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + str
    );
    const data = await resp.json();
    dispatch(setCocktails(data.drinks));
    dispatch(searchCocktailsLoading(false));
  };
};
