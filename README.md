# Build-A-Board

By Ted Leary, Bobby Martin, Garnett Puett, Isaac Shoman, and Cory West-Forbes. May, 2018.

## Description

Build-A-Board is a bouldering support app that lets users create and share their climbing routes.

### Specs
| Spec | Input | Output |
| --- | --- | --- |
|**The program will take a user name input and difficulty to assign to user created climbing route**| Ted; V5 | User: Ted; Difficulty: V5 |
|**The program will allow users to create a route with up to 14 steps**| User Click | Highlight Hold |
|**The program will allow users to view list of previously uploaded climbing routes**| View Problems | Show List |
|**The program will allow users to click on list items to see detailed climbing route**| Click Problem | Show Grid |
|**The program will allow admin users to delete uploaded climbing routes**| Admin Click | Delete Route |

### Setup/Installation

#### Node Installation
* Install Node.js <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
* Install Angular CLI: Open terminal and run `npm install -g @angular/cli`
* Install the Node typescript package: Open terminal and run `npm install typescript -g`
* Open terminal, navigate to project root folder and run `npm install`

#### Firebase Setup
* Navigate to https://firebase.google.com/
* In console view click + Add project
* Enter project name and country then click Create Project
* Go to Firebase project page and click Add Firebase to your web app
* Copy the following section of data from the window that opens:<br>
```
  apiKey: "",
  authDomain: "",
  &databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
```
* Open cloned project folder and create file src/app/api-keys.ts
* Go to api-keys.ts file and enter the following with the information from your Firebase project
```
export const masterFirebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};
```


* Go back to project page in Firebase and click Database under Develop on the left sidebar
* Go to Realtime Database and click Get Started, toggle Start in test mode and click Enable
* Click the vertical ellipsis icon to the right of the + - icons and select Import JSON
* Browse to the project folder user-data.json file and click Import
* To view project in development mode, navigate to project root folder and run `ng serve --open`

#### Firebase Deployed
* Travel to <a href="bouldering-generator.firebaseapp.com">Build-A-Board</a> to view the deployed app.


## Technologies Used

* Angular CLI
* Node.js
* Bootstrap
* Firebase

## License

This software is licensed under the MIT license

Copyright (c) 2018 **Ted Leary, Bobby Martin, Garnett Puett, Isaac Shoman, and Cory West-Forbes**
