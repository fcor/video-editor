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

### Install & Local development

```
git clone https://github.com/fcor/video-editor.git  # Clone the repository.
cd video-editor && npm install  # Install dependencies.
npm run prebuild # Prepare static files for further usage
npm start  # Start the local development server.
 ``` 

 ### Production Mode

 After installation, you are able to run the project on production mode running this command.

 ```
npm run build 
 ```

 Then go to your browser ```http:localhost:3000/``` and see the application alive.

 