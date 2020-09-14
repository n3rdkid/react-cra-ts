export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}
export interface IEpisodeProps {
  favorites: Array<IEpisode>;
  toggleFavorite: (episode: IEpisode) => IAction;
  episodes: Array<IEpisode>;
}
export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}
export interface IAction {
  type: string;
  payload: any;
}
