
* Lets take a loot at what is monolith and microservice architecture.

* Monolith architecture - Traditionally all the web apps were developed using Monolith Architecture.

* Microservice Architecture - In this we have different services for different jobs. All these services combined together forms an app.

* In microservices all the small services combined together forms a big app.

* Single Responsibility Principle - Each and every service has its own job.

* With microservice architecture all of the teams work on their on individual responsibilities.

** The services in microservice architecture needs to interact with each other to make the application work.

* The namaste react swiggy project we are making comes in UI microservice.

* All the services work on their own specific port (for ex - our UI service we are making is running on port 1234).

* On different ports we can deploy different services.

* At the end of the day all the ports can be mapped to different domain names.

** Lets see how our react application talk to different microservices.

* There are two approaches to how web app/ ui applications fetch the data from backend.

 - 1) As soon as our page loads we can make an api call to fetch the data, when we get the data then we can render it on to the UI.
 - 2) As soon as the page loads we will render the UI, then we will make an API call. And as soon as we get the result back from API. We will re render our application with new data.
 
* In React we will always be using the second approach.

* The 2nd one is a better approach and it will give us a better UX. (User experience)

* React has a very fast render cycle, React renders your UI very quickly with high speed. So we dont have to bother much about how many times we are rendering. 2 renders are ok.

* When we develop our react application in real world, we will have to make a lot of api calls.

** To write the code for the 2nd approach, we will make use of *** useEffect() hook.

* React hooks are nothing but normal Javascript functions which react gives to us, it has its own specific use cases where we use these functions.

** useEffect will take 2 arguments. The first argument is Arrow function, it will be a callback function. The 2nd argument will be a dependancy array.

* The callback function of useEffect will be called after your component renders.

** Purpose of useEffect - If you have to do something after rendering the component, you have to use the hook called useEffect.

* For fetching the data we will use a method/function named fetch.

* fetch() is a superpower which is given to us by browsers.

* fetch() will fetch the data from api.

* fetch() will return a promise.

* To resolve the promise use Async await.

* Once we fetch the data we need to convert it into a readable string by using JSON.

* Our browsers block us to call api from one origin to another origin.

** Here in our project we have made live api call to swiggys api.

* Shimmer UI - It is kind of like we load fake page until we get the actual data from the API. All the new web apps are following Shimmer UI.

* We will also make a Shimmer component for our project.

* Conditional Rendering - Rendering on basis of some conditions.

** Why we use stated? - If you want to make your components dynamic or you want that something to change in your component. We use local state variable, here's where	
						useState's state variable comes into picture.
						
* React is so good in DOM manipulation because it uses Reconciliation Algorithm and by it, it finds the diff and it exactly knows what to change!

* **** Whenever you change a local state variable, React re renders the component.

** Whenever state variable update, React triggers a reconciliation cycle.

* 