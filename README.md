# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Docker](https://www.docker.com)

## To start app

First of all, to start this app clone (or download) this rep. Then you need install Docker from their site. After you instaled it, run command line (in Windows), cd to folder you clone rep, and run: 

### `docker build -t simpletodo .`

This will make image.

After the image was build run command 

### `docker run -it --rm -p 3000:3000 simpletodo`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To stop app press Ctrl+C in command line.
