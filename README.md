> # News App - Head Up <img src="./screenshots/headupLogo.jpg?raw=true" width="50" height="50" />

<img src="./screenshots/Shot1.JPG?raw=true" width="150" height= '300' />&nbsp;&nbsp;
<img src="./screenshots/Shot2.JPG?raw=true" width="150" height= '300' />&nbsp;&nbsp;
<img src="./screenshots/Shot3.JPG?raw=true" width="150" height= '300' />

## _How to run this app?_

- [SetUp your development environment](https://reactnative.dev/docs/environment-setup)
- Run the following Commands:

```
$ git clone https://github.com/sanjaya1996/RNative-NewsApp-HeadUp.git
$ npm install
```

- Set Up Environment Variable (**_very important_**)

  - Create `.env` file inside your root folder.
  - Store your News api key in `.env` file you created-> Get from [newsapi.org](https://newsapi.org/)

  ```
  NEWS_API_KEY=youRAPikeYHere
  ```

- Open your Android Emulator
- Run this code to Start app

```
$ npx react-native run-android
```

## _Dependencies:_

This is fairly a small Project. We could have developed this app without a single dependencies mentioned below. I planned this app to Scale up and add other features in near future. Therefore, I have added all the relevant dependencies in upfront. Some important dependencies added in this app are as follows:

- axios
  - Axios will help us to make a HTTP request way more easier.
- redux , react-redux & redux-thunk
  - Redux is a state-management tool which has been used to manage the data, specially news data in this app. Redux-thunk is a middleware which will help in synchronous actions for asynchronous operations. React Redux is the official Redux UI binding library for React.
- react-navigation : @react-navigation/native, @react-navigation/stack
  - These dependencies / React Navigation whill create a chain of navigators that define the screen flow of our app
- react-native-dotenv
  - Store sensitive informations/variables in .env file. For example, in this app I stored my NEWS_API_KEY in .env file, so that I prevent it from exposing in gitHub. However, I strongly recommend you not to store any sensative information in client side if you are planning to publish your app.

## _Files:_

You might be overwhelmed by looking the file structure and number of files in this app. I already mentioned that I am going to scaleup this app in future. So, I have implemented this project in such a way that anyone willing to add new features in this app will get enough room and will not face any issue, and will not mess up.

## _Developer: Sanjay Dahal @[HeadupLab](https://www.headuplabs.com/)_

<img src="./screenshots/headupLogo.jpg?raw=true" width="100" height="100" />
