# **Video Editor**

Video editor is a web applications that allows a user to slice up a video into clips.

**Features**
- Custom video player.
- Easy to use interface to add new clips to the list by specifying a name, start time, and end time.
- The ability to delete clips from the list.
- The ability to edit existing clips in the list.
- The ability to play clips in the video player.

## Installation guide

Follow this instructions to run this project on your local machine.

### Prerequisites

To run this project all you need to have installed is node.js. It was created using this version:
```sh
node --version
v8.11.2
 ``` 

### Install & Local development

```sh
git clone https://github.com/fcor/video-editor.git  # Clone the repository.
cd video-editor && npm install  # Install dependencies.
npm run prebuild # Prepare static files for further usage
npm start  # Start the local development server.
 ``` 

 ### Production Mode

 After installation, you are able to run the project on production mode running this command.

 ```sh
npm run build 
 ```

 Then, go to your browser ```http:localhost:3000/``` and see the application alive.

 You can visualize and analyze the Webpack bundle via ```http://localhost:3000/statistics.html```.

## Built with

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Express](https://expressjs.com/)

Other dependencies used in this project:

- [Sweet Alert 2](https://sweetalert2.github.io/)
- [React Progress Bar](https://github.com/react-component/progress)
- [Redux-Logger](https://github.com/LogRocket/redux-logger)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

I used this custom [boilerplate](https://github.com/fcor/react-app) to generate the scaffolding for this app.

## Discussion

### Mandatory Features

- An HTML5 video player that utilizes media fragments
- A list of clips to be played in the video player
- The first item in the list should be the full video
- An interface to add new clips to the list by specifying a name, start time, and end time
- The ability to delete clips from the list (excluding the full video item )
- The ability to edit existing clips in the list
- The ability to play clips in the video player

All this requirements were met thanks to the power of media fragments for playing and editing capabilities. In terms of video handling (Play/Pause, duration, custom controls etc.) everything is based on [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) API.

### Bonus Features
- The ability to automatically jump to the next clip after it finishes, with a 3 second waiting period and appropriate loading animation.
 - The ability to ‘save’ clips for persistent use.
 - The ability to add arbitrary ‘tags’ to clips so that they can be filtered by the tag name.
 - Hotkeys to jump between the current clip and next and previous clips (if there are any).
 - Markers on the video player timeline that denote where a clip starts (full video only).
 - Clicking the marker chooses that clip and plays it from that point.
 - The ability to reuse the the player and playlist on another page without the editing capabilities.

Hotkeys feature was met using some eventListeners and taking advantage of custom control methods created for video handling. Also, playlist and video player components are totally reusable without editing capabilities as you can see when running the application.

I was so excited about "Jump to the next clip feature", animations and microinteractions are my stuff! Unfortunately time was against me. However, this would be 'easy' to implement taking advantage of ```nextClip``` action created for Hotkeys.

Hope you like it!