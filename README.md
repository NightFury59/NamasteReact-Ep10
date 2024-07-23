** Finding the Path


* We will learn about routing in our React application, we will see how we can create multiple routes, how we can create nested routes, how we can create different pages in our app.

* We will be using a routing library.

*** useEffect -

** A very important interview question - When is useEffect() called? Ans - The useEffect() is basically called after every render of that component.

** If we dont use any dependancy array inside of useEffect() then useEffect will be called on every render.

** If useEffect() has an empty dependancy array => useEffect(() => {}, []). Then useEffect is called only during the initial render and just once.

** If there is something present in the dependancy array in useEffect, then it will be only called when the dependancy gets updated.


*** useState - useStates are used to create local state variable inside of your function component.

* Never use, useState() outside of your component, it doesnt make any sense!

* Call the useState hook at the top level of the component, its a good coding practice and doesnt create inconsistency in your code.

* Never use your useState inside of an if else block, for loop.


** Lets see how we can create different routes inside our React application -

* We will be using a npm javascript library, that library is known as React Router dom. Many big projects are built using this.

* Whenever we have to create routes, we have to create routing configurations. For that we will import { createBrowserRouter } from react-router-dom;

* When we create a configuration we need to provide that configuration, we need to provide it to render it, for that we will have one more important component which we can import from
  react-router-dom. This important component is RouterProvider.
  
** react-router-dom gives us acces to an important hook - useRouteError

* This hook gives us more information about the error.

** Children routes - Children is a list of paths, paths of childres.

* When you are using react and you want to Route so some other page, never use an anchor tag. Because the whole page will get refreshed due to its operation.

* To route to some other page without reloading the whole page, React-router-dom gives us a superpower - Link Component. import { Link } from react-router-dom.

* How to use the Link component? - The Link component works exactly the same as anchor tag.

* The only difference between Link and Anchor tag is, in Anchor tag we use href="", in Link we will use to="".

*** React is known as Single Page Applications - Its a whole single component, and all the routing is just changing taking place between components. The page doesnt get refreshed. Client Side Routing.

** There are 2 types of routing you can have in web apps - 1) Client side routing , 2) Server Side Routing.

* 1) Server side routing - It means you make a network call and the respective page appears from the server.

* 2) Client side routing - No network calls are made for pages to get appeared. Because all the components are already present in the app.

** React is based on Client Side Routing **

* All the apps we make mostly have routing.


** GraphQL - It helps us loading only that data which is required for us.

** Dont panic when you get errors.

* Whenever you will use the map function, always use a key along with it. Otherwise React will throw a warning.

** Link uses Anchor tag behind the scenes. Link is a wrapper over anchor tag.