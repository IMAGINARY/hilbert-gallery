# Architecture
General description of the system, based on [this idea](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)

## General description

The *backend* allows creating exhibitions made from photos and videos, and dynamically asigning them
to client screens that will display them to visitors as a slideshow.

The system then can autonomously playback the exhibition on its own. The server provides client screens
with the media (exhibits) and indicates when to display them.

## Application

The system is a typical Rails application.

The main models of the system (`/app/models`) are:

- Exhibit: An *Exhibit* is either a photo or video that could be shown in the museum.

## Push communication

The server *pushes* the exhibits to the client stations. This communication runs over a mechanism
provided by Rails called Active Cable. Active Cable uses Web Sockets for communication to the client
and the pub/sub mechanism of a Redis server within the server to trigger sending the message.