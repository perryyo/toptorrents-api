"use strict";

module.exports = {
  DEFAULT_PORT: 3000,
  INDEX_UPDATE_INTERVAL: 1000 * 60 * 60,
  ADMIN_EMAIL: "r@rdegges.com",
  TPB_URL: "https://thepiratebay.org/top",
  TPB_CATEGORIES: {
    audio: {
      music: 101,
      books: 102,
      soundClips: 103,
      flac: 104,
      other: 199
    },
    video: {
      movies: 201,
      moviesDVDR: 202,
      musicVideos: 203,
      movieClips: 204,
      tvShows: 205,
      handheld: 206,
      hdMovies: 207,
      hdTVShows: 208,
      "3d": 209,
      other: 299
    },
    applications: {
      windows: 301,
      mac: 302,
      unix: 303,
      handheld: 304,
      ios: 305,
      android: 306,
      other: 399
    },
    games: {
      pc: 401,
      mac: 402,
      psx: 403,
      xbox360: 404,
      wii: 405,
      handheld: 406,
      ios: 407,
      android: 408,
      other: 499
    },
    //porn: {
    //  movies: 501,
    //  moviesDVDR: 502,
    //  pictures: 503,
    //  games: 504,
    //  hdMovies: 505,
    //  movieClips: 506,
    //  other: 599
    //},
    other: {
      eBooks: 601,
      comics: 602,
      pictures: 603,
      covers: 604,
      physibles: 605,
      other: 699
    }
  }
};
