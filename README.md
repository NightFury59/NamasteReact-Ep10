** Lets get Hooked!

What is a React Hook ? - A react hook is a normal javascript function which is given to us by React. The only thing is that, that function comes with superpowers.

* There are multiple such functions and those are known as React hooks.

** React Hooks - Normal JavaScript Utility functions written by Facebook developers.

* To use them we will have to import those functions.

* There are 2 very important React utility functions -
1) useState()
2) useEffect()

* 99% of the times in react, you will be working with useState() and useEffect().


** useState() - Used to generate superpowerful state variables in React.
 * To use useState() you have to import it using Named import .. import { useState } from "react";
 
* useState() maintains the state of your component.

* Whenever you call a useState() it will give you a state variable. And we recieve that state variable inside an array like - const [listOfRestaurants] = useState();
 
* This is how you create a normal variable and state variable -

1) Normal variable - let listOfRestaurants;

2) State Variable - const [listOfRestaurants] = useState();

* In the useState([]), the array inside of the useState will act as the body of the variable.

* To modify these state variables, you will need to modify them by using a function.

** The function which will be used to modify will go as the second parameter in the array.

** You should write the function which you will use to modify as - setVariableName. For example - setListOfRestaurants

** This second function which we have used is for the purpose of updating the list(variable content).


*************** Whenever a state variable is updated, React re-renders the component. **************************
 

* Everything that react can do you can do that using normal html, css, JS.

* Then why React? - It makes you write less code and make you do more on th webpage, It makes the developers life easy.

** We will learn about React hooks.

* The best practice is to make separate files for separate components.

* All the main code in a react project is generally kept in a src folder.

* We should create separate files for separate components. So we will create separate files for the components in our project(Header, Body, AppLayout, RestaurantCard).

* The best common practice is to create a components folder for all the components. It will be created inside the src folder.

* Inside the components folder it will have files for different components.

* Whenever you create a file for a component, name it exactly the same as the component name. For example - Header.js

* You can write it as Header.js or Header.jsx anything as you wish. It doesnt matter, we will use .js for projects.

* We can export a React Component using export default ComponentName.

* We can import a React Component as import ComponentName from "path".

* Whenever you have any hard coded data, never keep it in your components file.

* Never keep any hard coded string into your components files.

* Put the hard coded data into a folder named utils/commons and inside that create a file named constants.js.

** There are two types of export and import -

* One is the default export and the other is named export or named import.

* The second way(named) is used generally when in a single file you have to export multiple things.

* In a single file you can only write 1 default export. You cant do two default exports in a single file.

* It is easy to do a named export, just add export before the thing that you want to export.

* When we have used a named export theres a slight difference on how we can import those named export.

* Whenever you want to import a named export you need to add curly braces for whatever you want to import. Like import {..} from "path".

* Lets create a button that will show us top rated restaurant when we click on it.

* React is fast and efficient in DOM manipulation.

* React tries to ensure that the UI and DATA layer work with each other.

** Why React is fast? Because it can do faster DOM manipulation, it can do efficient DOM manipulation.


*** State Variable - It is like the state of the component.
 
* State Variable - Super Powerful Variable.

* What is a React Hook ? - A react hook is a normal javascript function which is given to us by React. The only thing is that, that function comes with superpowers.



*** How React Works Behind the Scenes *** -

* Reacts works on an algorithm called as "Reconciliation Algorithm". Reconciliation Algorithm is known as React Fiber.

* In React 16 a new algorithm to update the DOM came out. That algorithm is known as Reconciliation Algorithm (React Fiber).

* React Fiber is a new way of finding the div and updating the DOM.

* Suppose you have 7 res cards and you click the button to filter out res cards having rating above 4.4, So it basically finds out the difference between virtual DOM.

* The diff algorithm finds out the difference between the old DOM and the new DOM, after finding the difference it will update the actual DOM and thats how react becomes faster.

*** Whenever there is a change between any state variables, react will find out the difference between virtual DOM and it will re render the component (update the DOM).



** This is why React is fast and best -

**** So if you are asked the question why React is fast, the answer is - Because React is doing efficient DOM manipulation,
React finds out the difference between virtual DOMs and updates the UI, this is what React is best at.

* Why React is fast? By Akshay Saini - Because it has a virtual DOM, it has a diff algorithm that is very efficient, it can do efficient DOM manipulation, it can find out the diff and update the UI.
									   