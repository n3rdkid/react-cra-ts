import React from "react";
import { Store } from "./store";
import { IEpisode, IAction, IEpisodeProps } from "./Interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  React.useEffect(() => {
    state.episodes.length === 0 && fetchData();
  });

  const fetchData = async () => {
    console.log("FETCH DATA CALLED");
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
  const toggleFavorite = (episode: IEpisode): IAction => {
    const episodeInFavorite = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAVORITE",
      payload: episode,
    };
    if (episodeInFavorite) {
      const favouriteWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAVORITE",
        payload: favouriteWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favorites: state.favorites,
    toggleFavorite,
  };
  return (
    <>
      <h1 className="header">Rick and Morty App</h1>
      <p>
        Favourite Episodes Count : {state.favorites.length}{" "}
      </p>
      <div className="episodes-wrapper">
        <React.Suspense fallback={<div>Loading...</div>}>
          <EpisodeList {...props} />
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
