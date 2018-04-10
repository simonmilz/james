<p align="center">
    <img alt="James" src="https://raw.githubusercontent.com/simonmilz/james/master/assets/img/james.png" width="200">
</p>

<p align="center">
James is a small Node.js server running on my Rapberry Pi. It is the way into my internal network and ensures that my four Google Home Minis can automate and understand even more things. In combination with the appropriate <a href="https://github.com/simonmilz/james-dialogflow/">DialogFlow</a> script I teach James more and more commands.
</p>

<p align="center">
  <img alt="James" src="https://img.shields.io/github/last-commit/simonmilz/james.svg">
  <img alt="James" src="https://img.shields.io/github/languages/code-size/simonmilz/james.svg">
  <img alt="James" src="https://img.shields.io/github/languages/top/simonmilz/james.svg">
</p>

---

## What exactly does James do?

<p>
Actually, James only establishes a permanent connection to a Redis queue to process messages. The same queue is used by a DialogFlow script to send messages. This allows me to communicate with devices in my internal network without connecting them to the Internet.
</p>

## What technologies and packages does James use?

<p>
James uses only a handful of Node.js packages. Of course, a corresponding Redis database is also used, for this I use the <a href="https://redislabs.com/">Redislabs</a> Free Plan. Below you will find a list of the modules and what they are used for.
</p>

The basic tech-stack to at least run the server:

* `node` 8.9.3
* `npm` 5.5.1
* `yarn` 1.3.2

Now let's take a look at the Node.js packages:

* `bull` -> https://github.com/OptimalBits/bull - The fastest, most reliable, Redis-based queue for Node. 
Carefully written for rock solid stability and atomicity. `bull` is used as a message queue. James DialogFlow script also uses `bull` and sends the corresponding messages there.

* `bravia` -> https://github.com/waynehaffenden/bravia - Node.js module for discovering and controlling Sony BRAVIA Android TVs. This module allows you retrieve all the available service protocol API methods and invoke any of them. That is the package to use if you have a Sony BRAVIA Android TV. 
