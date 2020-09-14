import React from "react";
import { IEpisode } from "./Interfaces";

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavorite, favorites } = props;
  console.log(episodes, favorites);
  return episodes.map((episode: IEpisode) => {
    return (
      <div className="episode" key={`${episode.id}`}>
        <img
          src={`${episode.image.medium}`}
          alt={`Rick and Morty episode ${episode.name}.`}
        />
        <div className="episode-name">{episode.name}</div>
        <div className="episode-info">
          Season : {episode.season} Number: {episode.number}
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              toggleFavorite(episode);
            }}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
      </div>
    );
  });
}
