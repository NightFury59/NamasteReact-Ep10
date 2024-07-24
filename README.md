** Lets get Classy!

* Class based components - Class based components is an older way of creating components inside react.

* Class based component are very important to know as it is asked a lot during interviews. Because lot of companies have these components in their legacy codes.

* Class based components will exactly tell you have react life cycle works, how react components get rendered onto the page, etc.

** Class based component - Its a normal javascript class which has a render method which will return some peice of JSX.

* For creating a class based component, you will have to do it like this. class "your component name" extends React.Component {}. 
* Doing this our component becomes a class based component.

** The class based component will have a render method inside of it, and this render method will return a peice of JSX which will be displayed onto the UI.

* class "componentName" extends React.Component {
	
	render() {
	
		// peice of JSX which will be displayed onto the UI.
		
		return (
			// content to be returned.
		)
	}
}


** To make use of class based components we use React.Component, which is basically a class given to us by react. Hence, we have to import React from 'react' at the top.

** To have props inside of a class based component, we will have a constructor(props) inside of our class above render method. This constructor will recieve the props.

* Inside of the contructor props we have to do super(props) and below it console.log(props).

* Then inside of the JSX part of our class we will have to do this.props, You will always have to use the this keyword for using props inside of class based components,
so that this props can be accessed anywhere inside of the class.

* In class based component we dont have to import useState hook, as earlier there were no hooks.

* We create state variables inside of the class based components inside of the constructor(props).

* We do this.state = {} inside of our constructor and , this state is basically a big whole object which contains state variables.

* Then to use the state inside of our component in the JSX part we will have to do this.state.count

* In functional component we can create as many state variable as we want to.

** In class based component the state is basically a big object which will contain all the state variables.

** NEVER UPDATE STATE VARIABLES DIRECTLY.

* To update the state variable in class based components, we will make use of this.setState({}). The this.setState will contain the updated value of your state variable.

** How React class based components are mounted onto the webpage -

* The first thing when a class loads a constructor is called, once the constructor is called then the render is called 

** If we have a parent class based component and inside it we have a child class based constructor. The console.log will get executed in the below order -
1) Parent constructor,
2) Parent render,
3) Child constructor,
4) Child render.
	
* As class based component has constructor and render method, it also has one more method named as componentDidMount().

* When the class based component loads, first of all the contructor is called then the render method is called and after that the componentDidMount is called.

* The componentDidMount() will be called when the component is mounted on to the webpage.

* Now if we have parent class based component and child class based component and each of them has constructor, componentDidMount and render method. And we put a console.log() in each.

** IMP Interview question -
* What will be the order of the console log? - Ans -

1) Parent constructor
2) Parent render
3) Child constructor
4) Child render
5) Child componentDidMount
6) Parent componentDidMount

* componentDidMount - componentDidMount is used to make API calls.

* Why API call is made inside componentDidMount? - As we know on our webpage react first loads the page then renders then makes an API call and then again re renders. SO,
in class based components first it will execute the constructor part then the render part and then the componentDidMount part. So it will do the cycle of Loads -> Renders -> API call -> Re renders.

** How to make an API call in class based component? -

* In class based component you can do async before the componentDidMount function.