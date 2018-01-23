# aerosmith-node
Fhacktory hackathon winter 2018

Server running on the raspberry used to: 
* make the AR drone 2.0 hover and land
* control the back propeller

![hovercraft](https://i.imgur.com/TSSH6RW.jpg)

## Installation

You need to install a node ARM version on the raspberry:

```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```

Then you have to install the pigpio C library to interract with the two servo directly plugged:

```
sudo apt-get update
sudo apt-get install pigpio
```

And then add the pigpio Node.js package to the project:

```
npm install pigpio
```

Finally, don't forget to install all the project dependencies:

```
npm install
```

## Build

Run ```npm run build``` to build the project

## Usage

Run ```sudo npm start``` to run the server 
