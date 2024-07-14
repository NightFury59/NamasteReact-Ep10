import React from 'react';
import ReactDOM from 'react-dom/client';

// Below is a React Element
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");        // core react way.

// the above and below codes are equivalent.

// const jsxheading = <h1>Namaste React using JSX</h1>                                 // using JSX.

// console.log(heading);
// console.log(jsxheading);

// const root = ReactDOM.createRoot(document.getElementById("root"));      

// root.render(heading)

// root.render(jsxheading);


// React Functional Component example -

// const HeadingComponent = () => (
//     <div id="container">
//          <h1 className="heading">Namaste React Functional Component</h1>                   
//     </div>
// );

// const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>  // It is doing the same thing as HeadingComponent.


// Short hand Syntax - If the code is just one line then you can skip the return statement.

// const fn = () => true;              // fn and fn2 are doing the same thing

// const fn2 = () => {
//     return true;
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);


// Now lets see if we want to render a component inside of another component then how to do it -

// const TitleComponent = () => (
//     <h1 className="hello" tabIndex="5">Namaste React using JSX</h1>
// )


// Just instert < TitleComponent /> inside of the div of the Heading2.
// Component Compostion
// const Heading2 = () => (
//     <div id="root">
//         <TitleComponent />
//         <h2>{console.log("hsajsjaska")}</h2>
//         <h1>Namaste React Functional Component 2</h1>
//     </div> 
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Heading2 />)


// Now lets see how to insert a React Element inside of another React element.

//React element
const elem = <span>React Element</span>

// React element
const title = (
    <h1 className="hello" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
)


// React functional component
const Heading2 = () => (
    <div id="root">
        {title}
        <h2>{console.log("hsajsjaska")}</h2>
        <h1>Namaste React Functional Component 2</h1>
    </div> 
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />)


/*

** To put elements inside of another element or component use the syntax {element name}.

** To put component inside of another component or element use the syntax <component name />.

*/

// To add a component inside of a component or an element we do <component name />, but we can also do it as <component name><component name />.
