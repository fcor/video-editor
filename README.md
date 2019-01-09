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
