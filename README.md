* For running our project we do npx parcel index.html , instead of doing this lets build a script so we can use npm commands instead of npx command.

* To create a npm script you need to create that in your package.json file.

* In package.json go in the section scripts.

* Lets create a script for starting our project in dev mode.

* When we do "start": "parcel index.html" it will run our project in development mode.

* This script will be used to create a dev build.

* In the scripts lets also create a script for building it for production. Lets name it as build 

* This will basically build the project, the production build of our project.

* Now when we have created these scripts we no longer have to write npx parcel index.html to run our code.

* What we have done now by adding these scripts, it is an industry standard. Generally we create these scripts and it is a standard convention in the industry to use these scripts.

* If you are in a foreign code setup and dont know how to run the project, just go into the package.json and find the scripts and you will get the exact command to run the code.

* So now after we have inserted these scripts inside of our package, to run the project you will have to do npm start and then the name of the script.

** npm also gives you a shortcut, instead of doing npm run start you can also just do npm start.

* This shortcut only runs for start, like npm start instead of npm run start. It wont work for build, you cant do npm build instead of npm run build.


* What are React Elements? - Just like we have DOM elements, in React we have react elements which are kind of equivalent to DOM elements. Lets assume
							 we create a react element const heading, React elements take 3 argument the first argument is the name of the tag for ex h1 tag,
							 the 2nd argument is the object that we will go as attribute for example {id: "heading"} the 3rd argument goes what are the children of this heading.
							 
							 const heading = React.createElement("h1", {id: "heading"}, "Namaste React")  // this is a react element named heading,
							 it has 3 arguments. First one is the tag h1, second one is the object which has the attributes and the third argument is "Namaste React"
							 which is the child of the react element heading.
							 
* When we do React.createElement it basically creates an object behind the scenes. So React.createElement at the end of the day is an object.
 // React.createElement => Object
 
* When we render this element(object) in the DOM it becomes then it becomes a html element that we see on the webpage.

* Lets see how to render - So lets assume if you have to render it inside the div, then you will have to create a root inside react like -
						   const root = ReactDOM.createRoot(document.getElementById("root")) // we have done document.getElementById("root") because the id of div is root.
						   
						   Because we are dealing with browsers thats why we did ReactDOM.createRoot instead of React.createRoot. For displaying onto the browser we'll use ReactDOM.
						   
						   After doing this, the const root will now become the root for our react app. Whatever will happen inside react will happen inside this root.
						   
						   Then we'll do root.render(heading);
						   
						   

* What are DOM Elements? - DOM Elements are the html elements that are on the elements section when we do inspect in the browser.

* React.createElement is not a good way, this React.createElement is very clumpsy. Suppose you have to create a h1 tag on the page, we have to write the peice of code
which takes 3 arguments and its a little annoying. It's not very developer freindly as it is hard to read.

* So to help all the developers community, Facebook developers created something known as JSX.

** JSX - JSX is a JavaScript syntax which makes it easier to create React elements. 

* JSX is not a part of React, React is different and JSX is different. A lot of developers think that react cannot be written without JSX. But that aint true.

* JSX just makes the developers life easy, thats why we use JSX.

* Now lets see how we can create a h1 tag in jsx. 

* JSX is not html inside JavaScript, Hence JSX is magical.

* A good library or framework is such that makes developers life easy.

* So as jsx makes our life so easy, from this point on we wont use React.createElement.

* JSX code cant be readed by JavaScript Engine, it will throw an error. In our project we are able to use JSX because of the beast that is Parcel. 

* JSX is transpiled before it reaches the js engine, it is done by parcel and parcel does it with the help of Babel.

* Babel takes your JSX code and converts it into code that your js engine understands.

* What happens is that when you write a JSX code it is converted to React.createElement behind the scenes, the React.createElement makes a JS element(object) and then this React element
  is rendered onto the DOM as an html element.
  
* JSX => React.createElement - JS Object => HTMLElement(render)

* Babel is converting your JSX to React.createElement

* In html if we do class, in Babel we will have to do it as className.

* In html we do tabindex but in JSX we will have to do tabIndex.

* So if we want to give attributes in JSX we will have to use camel casing.

* If we want to write our JSX code in multiple lines we will have to wrap it inside parantheses. That is done so that Babel understands where JSX is starting and where it is ending.

* We can write single line JSX code without the parantheses, although we can wrap it inside parantheses if it is just a single line JSX too, its just that it is'nt mandatory during single line JSX.



*** React Components ***

* Everything in React is a component. There are two ways of creating components in React.

* 1) Class Based Component - Class based component is the old way of writing code. Nobody uses class based components now.

* 2) Functional Component - Functional component is the new way of writing code. You should be very good in it as it is in use today. 
							A functional component is a normal javascript function which returns some JSX.

* React functional component is just a normal javascript function.

** Whenever you are creating a React component always remember to name it with a capital letter. It is very important otherwise you'll get an error. For ex - const Heading.
   It's a react way to understand that this is a component.
   
* A react functional component is a normal javascript function that returns some JSX code.

* React element is a JSX, so functional component you can also call it as a JavaScript function that returns a react element.

* In functional component you can write them without the return statement if it a one liner and if it has multiple lines then wrap them inside parantheses.

* It is a industry standard of not using return statement inside of the react functional components. So you will rarely find return statement inside of a react functional component.

** JSX can be nested. JSX is a superhero. It makes our code very readable.

* We cant render react component the way we render react element.

* Rendering react element : root.render(heading);					// heading is the name of the react element. 
* Rendering react component : root.render(<HeadingComponent />)    // HeadingComponent is the name of the react component.

* Putting a component inside of another component is called as *** Component composition.

* Always use arrow functions instead of the normal functions its a good way to write your code!


** An amazing superpower of JSX - In JSX anywhere you put curly braces , inside these curly braces you can run any peice of javascript expression.
   You can write any javascript code inside this curly parantheses.
   
* You can inject any javascript into JSX and it comes down as an html.


** To put elements inside of another element or component use the syntax {element name}.

** To put component inside of another component or element use the syntax <component name />.

** Component cannot be accessed before initialization.

* You can mix and match anything inside anything in component and elements of react.

** JSX takes care of injection attacks likes cross site scripting and all.

* JSX will escape malicious data. It sanitizes the code.

** To add a component inside of a component or an element we do <component name />, but we can also do it as <component name><component name />.