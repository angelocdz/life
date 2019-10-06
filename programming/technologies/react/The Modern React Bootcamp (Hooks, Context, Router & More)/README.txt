start  2019 08 aug 26 14:23 00 00 
finish 1993 01 jan 09 00:00 00 00 

Colt Steele

1. A Taste of React

1. Welcome to the Course!
2. Intro to React
3. Is React a Framework or Library                        
4. Introducing Components!                   
 codesandbox.io
5. Pie Chart Component                       
6. Setting Up Your Server                    
 live server, ls, python3 -m http.server
7. Writing Our First Component               
8. Function Vs. Class Components             
9. Download All Code, Slides, & Handouts     

================================================== 

2. Introducing JSX

1. Basics Rules of JSX                       
2. How JSX Works Behind the Scenes           
 babeljs.io = try it out, check react
3. Embedding JavaScript in JSX               
4. Conditionals in JSX                     
 https://reactjs.org, https://blog.logrocket.com/
 conditional-rendering-in-react-c6b0e5af381e
5. Standard React App Layout                 

================================================== 

3. Props and More

1. Intro to React Props                      
2. Props are Immutable                       
3. Other Types of Props                      
4. Pie Chart Component Demo w Props          
 https://codepen.io/Colt/pen/MZZEbZ or https://
 codepen.io/Colt/pen/MZZEbz?editors=1010 
 original mehdi hamoudi
5. EXERCISE Slot Machine                     
6. EXERCISE Slot Machine Solution            
7. Looping in JSX                            
8. Adding Default Props                      
9. Styling React                             

================================================== 

4. Introducing Create React App
 
1. Intro to Create React App                 
2. 2 Ways of Installing CRA                  
 nodejs, node -v, npm -v, npx -v
 1 npx create-react-app my_app_hellooo
 2 npm install -g create-react-app
  create-react-app hello-world
3. Creating a New App                        
 npm install -g create-react-app
 create-react-app my-app-name
 create-react-app our-first-app
 ls, cd our-first-app/, ls 
4. Starting Up the Server                    
 npm start, http://localhost:3000/, ctrl+c 
 webpack
5. Modules Import & Export Crash Course      
6. EXERICSE Fruits Modules                   
7. EXERCISE Fruits Modules Solution          
8. Create React App Conventions              
9. CSS and Assets in Create React App        

================================================== 

5. Pokedex Project

1. Intro To Pokedex Exercise
2. Creating Pokecard Component               
3. Adding Pokedex Component                  
 imrc, es7 react snippets
4. Styling PokeCard and Pokedex              
5. Adding Fancier Images                     
6. The PokeGame Component                            
7. Styling Pokegame                                   

================================================== 

6. Introducing State

1. State Goals                               
2. Quick Detour React Dev Tools               
 react developer tools, drag react
3. State in General                           
4. Initializing State                        
5. IMPORTANT! ALTERNATE SYNTAX                
6. WTF is super() Vs. super(props)           
7. Setting State Correctly                   
8. Crash Course Click Events in React        
9. ALTERNATE SYNTAX PT 2                     
10. EXERCISE State Clicker (not done)
11. EXERCISE State Clicker Solution           
12. The State As Props Design Pattern         

================================================== 

7. React State Dice Exercise

1. Introduction to Dice Exercise (not done)
2. Writing the Die Component                 
 ls, create-react-app dice, cd dice, ls, npm start 
 https://fontawesome.com/start
3. Adding the RollDice Component             
4. Styling RollDice                           
5. Animating Dice Rolls!                      

================================================== 

8. React State Patterns

1. Updating Existing State                    
2. Mutating State the Safe Way               
3. Designing State Minimizing State           
4. Designing State Downward Data Flow        
5. State Design Example Lottery               
6. State Design Example LottoBall Component   
7. State Design Example Lottery Component    

================================================== 

9. State Exercises!

1. State Exercise 1 Coin Flipper (not done)
 Heads:"https://tinyurl.com/react-coin-heads-jpg" 
 Tails:"https://tinyurl.com/react-coin-tails-jpg"
2. State Exercise 1 Coin Flipper Solution    
3. State Exercise 2 Color Boxes  (not done)
4. State Exercise 2 Color Boxes Solution     

================================================== 

10. The World of React Events

1. Commonly Used React Events                  
2. The Joys of Method Binding (                
 function handleClick() {}, let h1 = handleClick.
 bind(this), h1, h1 === handleClick
 let h2 = handleClick.bind(this), h1 === h2 
3. Alternative Binding With Class Properties 
 babeljs.io, stage-2, react
  class Cat {
    handleMeow = () => {
      console.log("MEOW");
    }
  }
4. Binding With Arguments                      
5. Passing Methods to Child Components         
6. Parent-Child Method Naming                
 naming Convention
 parent just add function name corresponding to 
 the behavior
 remove, add, open, toggle, etc
 child just add "handle"
 handleRemove, handleAdd, handleOpen, handleToggle, etc
7. Quick Detour React Keys                   
 index as a key is an anti-pattern 
 shortid, uuid 

================================================== 

11. Hangman Exercise   
1. Introducing The Hangman Exercise (not done)
2. Starter Code Walkthrough (not done)
 npm start, npm install, npm start
3. Adding Keys                               
4. Tracking Incorrect Guesses                 
5. Adding Game Over                         
6. Adding Alt Text                          
7. Randomizing Words                        
8. Adding a Reset Button                    
9. Making the Game Winnable & Styling       

================================================== 

12. Lights Out Game

1. Introducing Lights Out
2. Exploring the Starter Code
 npm start, npm install, npm start
3. Displaying the Game Board                   
4. Flipping Cells      
5. Winning the Game
6. Styling the Game
 https://codepen.io/Trinca/pen/NAvpWa
        
================================================== 

20. React Router

================================================== 

23. Router Exercises Part 2 

2. Working with Bootstrap in React 
 reactstrap, getbootstrap 
 npm install --save react-router-dom bootstrap
 npm install --save jquery popper.js
3. Writing the DogList Component
4. Adding the DogDetails Component
5. Creating Our Navbar Component
6. Refactoring & Extracting Our Routes
7. A Couple Small Tweaks
8. Styling the App

================================================== 

37. Bonus Webpack Mini Course - Your Own Simple 
Version of Create React App

1. What Is Webpack
 the 2 main things webpack does
 it bundles our code/assets together
 it manages dependencies 
 a bundler for javascript and friends 
 packs many modules into a few bundled assets 
 npm start
 npm run build
 https://github.com/Colt/webpack-demo-app

d 2. Installing and Running Webpack 
5. Webpack Loaders, CSS, & SASS   
 regex
 npm install --save-dev style-loader css-loader
 npm start
 npm install --save-dev bootstrap
 npm install --save-dev sass-loader node-sass

================================================== 
================================================== 
================================================== 