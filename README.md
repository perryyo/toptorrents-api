# toptorrents-api

*An open source API service which always returns the top 100 movies torrents
from the web.*

## Purpose

This is a simple API service built with Node and Express that returns the top
100 movie torrents at any given time.

This is an example application I built for a talk I'm giving @ [Hack Reactor][].


## How it Works

The way this project works is very simple:

- Every 30 minutes it scrapes a list of top torrents from [ThePirateBay][], and
  stores the torrent metadata in memory.
- Whenever a developer queries the API service, we'll return a nicely formatted
  response which contains a list of the top torrents, and some information about
  them.

This project is production-ready, and can be deployed live to [Heroku][] in a
single click.


  [Hack Reactor]: http://www.hackreactor.com/ "Hack Reactor"
  [ThePirateBay]: https://thepiratebay.org/ "The Pirate Bay"
  [Heroku]: https://www.heroku.com/ "Heroku"
