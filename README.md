
# Sushant-World" 

cilck to visit web site https://sushantworld.github.io/Sushant-World/

Window + Alt + r = video record 
# 1 Project git push
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/Sushantgodase10/Sushant-World.git
- git push -u origin main

  ---------------------------------------

- git remote add origin https://github.com/Sushantgodase10/Sushant-World.git
- git branch -M main
- git push -u origin main
- 
# git config solve 
- 1  git checkout  US-SkeletonUI
- 2  git pull
- 3  git checkout master
- 4  git pull
- git merge master
-      
  ----------------------------------------
# Step for Deployment
- Install firebase cli - npm install -g firebase-tools
- Firebase Login - firebase login
- initilize Firbase - firebase init , and then select Hosting
- npm run build
- Deploy command - firebase deploy
# 2 what is npm ?
- => npm does have a full from but npm  not a node pakage manager , npm manage a pakage but does not stand node  pakages manager

- Ans=> 

- npm init
- name": "sushant-world-web",
  "version": "1.0.0",
  "description": "Thisis Sushant World Web  by Sushant Godase",
  "main": "App.js",
    "test": "jest"
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sushantgodase10/Sushant-World"
  },
  "keywords": [],
  "author": "Sushant Godase",
  "license":

--------------------------------------------

# 3 Dependencie Package
- Two Type Dependency Package

- 1) dev Dependencie Package
=> it is general required for development phase 

- 2) normal Dependencie Package
- => use in production also

- npm install -D parcel 
 
- push a git its impt
 - package-lock-json  and package json also  re create a node_modules
   
----------------------------------------------

# Server Host

 - npx parcel index.html  to create a app host in server
  - Server running at http://localhost:1234

  - npx if we executive a parcel 
    - 1) npm install react     
    - 2) npm install react-dom
      3) 
------------------------------------------------

# Parcel
https://parceljs.org/

what is npm ?
=> npm does have a full from but npm  not a node pakage manager , npm manage a pakage but does not stand node  pakages manager

# Extension
- Better Comments
- Prettier More - Code formatter
- ESLint
# What a Funaction Component
- it's funaction it is normal function javascript function which returns same pc of react element ans same pic of jax code
# React Hooks
-There Is Normal JAVA Script Function
(Normal JS utility functions)
- Two Type Hooks
- useState();
- useEffect();

# What is this CORS policy ?
-> Are browser blocker to calling api from one origin to different origin , if there is origin mismatch the 
   browser block this api call that is a cors policy. 
https://www.youtube.com/watch?v=tcLW5d0KAYE

- Add CORS Extension
- Allow CORS: Access-Control-Allow-Origin
# what is shimmer ui
-> A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and 
   shapes of the content that will eventually appear

   # React Hooks
   (Normal JS utility funcation)

- useState() - Superpowerful state Varibales in react
- useEffect()

# 2 type of Routing in web apps
Why it's Single page Application
=> it just one just componenet it's changes
 
- Clinet Side Routing
=>  Client-side routing refers to the practice of handling navigation and page rendering on the user's device, enhancing web application interactivity.

- Server Side Routing
 => We mak  network call and that page tha about HTML comming form server is called Server Side Routing.

 # useEffect it is two argument

=> now i'am import my useEffect form react library(this a name imported) so spik vluve code,and the we have useEffect hooks over here which have 2 argument  1) 1 st is callback funcations and  
 2) 2 ed it is a offional argument  keep emty what happen .if have don't any Dependencie array over here than this useEffect we call every time my component render, 
 do have  meak every time my api call render it's no
 no it's fu lesh , i just have do it ones and initial remnder i will just use a emty Dependencie array 

 what is the life cycle of this react component

  # Who this component put up in the webpage 
  # who this component loaded in the webpage (we use the words mounted)

  # When will be useEffect is call/ When will fuction will we called ?
- After evary render useEffect called
- After each and evary render is my useEffect fucations will     called 
# What will be the call first time (render)
  => After first render  ccomponentDidMount is called 

  and after sub equla render it's componentDidUpdate is called ther is diffreance between DidMount and DidUpdate 

  # When will be the call  componentWillUnmount call?
  - When  will be componentWillUnMount called is  when we are leving the page

  # what will be Clear/  when we leving the page ?
  - If have a setInterval and at set that okay do a console log of  a sushant react Op after evary seconed (waht will hapan ) it's started printing  sushant react OP after each seconed.
  - When youre changeing  youre pages it is not reloading youre page, it's just changeing the components, it's just rendering the react is reconsling, it's power SPA but bad thing a single page application

# Chunking
# Code Splitting
# Dynamic Bundling 
- All of then JS file size and we have a lot of child components inside the evary compoenets are bundling the size
# Why to be called Lazy loading/ on demand loading?
- When are app load intialy  are app Home we load it will not load the code for Grocery, only when i go to my Grocery page then only Grocery  then will Grocery code in the app. that is know as lazy loading

# Ui library
- https://chakra-ui.com/
- https://mui.com/material-ui/
- https://tailwindcss.com/
- install VS code in 	 Tailwind CSS IntelliSense
- https://ant.design/
- https://styled-components.com/
- https://sass-lang.com/
- https://getbootstrap.com/

# What is higher order components?
- Higher order components is functoin that take's components and return components.
# Redux  
- Redux primery use handling useSate of appliction another advantages redux when we use redux appliaction become easy to debuuge

# Redux- Toolkit
- Install 1) npm install @reduxjs/toolkit 2) npm install react-redux
-  Build our store
-  Connect our store to our app
-  Slice (cartSlice)
-  dispatch(action)
-  Selector
-  
# what is redux architecture all about?
- 
# All Test Case
- Manual Testing
# Types Of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# What is Unit Testing
- You test youre react component in isolations
   Ex - hedaer component in  isolation in app, Basically i will jusy try to render my header comopnent and will 
   she weather we got render properly or not. Only one spacepak component that type testing is know as Unit 
   testing
  - Testing One unit or component in isolation.
    
# What is Integration Testing?
- Integration testing is testing the integrations component
# What is End to End Testing 
- Testing a react appliaction as soon as the user land on the website to the user leave on the website. we will 
  test the all this flows. we test diffrent of the flow.
# Settings up Testing in our app
  - React Testing Library
  - https://testing-library.com/docs/react-testing-library/intro/
  - npm install --save-dev @testing-library/react
  - Install Jest
     - npm  i -D jest
     - npm install --save-dev babel-jest @babel/core @babel/preset-env
     - Add to File - babel config js add (module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
         };)

  - Configure parcel Config file to disable defult babel transpilation
      - https://parceljs.org/languages/javascript/#babel
  - Jest Configuration
      - npx jest --init
        Q - Would you like to use Typescript for the configuration file? » (y/N)
          - No
        Q - Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit.
             >   node
             jsdom (browser-like) press inter
              - Select to jsdom (browser-like) press inter
        Q - Do you want Jest to add coverage reports? » (y/N)
              - Yes
        Q - Which provider should be used to instrument code for coverage? » - Use arrow-keys. Return to submit.
              >   v8
              babel
              - Select to babel
        Q -  Automatically clear mock calls, instances, contexts and results before every test? » (y/N)
              - Yes
   -  Install JSDon / js dom library
        - https://testing-library.com/docs/react-testing-library/setup#jest-28
        -  npm install --save-dev jest-environment-jsdom
   -  __test__ is called as dunder
     
   - Install the
         - npm i -D @babel/preset-react. -> to make JSX work in test cases
         - Include @babel/preset-react inside my babel config
   - Install the
         - npm install -D @testing-library/jest-dom
     
