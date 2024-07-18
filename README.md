
Episode name - Talk is Cheap, Show Me the Code.

* From here we will dive deep into learning react while building a food ordering app.

* Lets do some planning on how we should build our application -

/**
* Header 
*   - Logo
*   - Nav Items
* Body 
*   - Search
*   - RestaurantContainer
*       - RestaurantCard
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
**/


* Firstly we'll build the top level component, which will be the layout of our app and everything will reside in it. Lets name it as AppLayout.

* Whenever you give style inside react, you have to give it as JS object. It is known as Inline styles.

* Inline styles is not the preferred way to write our code.

** Props - Props is the short form for properties, properties is something which you can pass to the component.

* Suppose if want to dynamically pass some data to the component, we can pass it as a prop.

* As functional component are just normal JavaScript functions, similary props are just normal arguments to a function.

** Passing a prop to a function is just like passing an argument to a function.

* When you have to dynamically pass in some data to a component, you pass it using props.

* How will the data from the backend come to us? - It will come in form of JSON.

*** Configue Driven UI - It basically means that the UI is driven by a conflict.

* In the recent times this is a very important concept. It is also important for the front end system designs part during interview.

* In large scale applications, All the images are inserted in cdn. All the images are hosted on cdn.

* In any react application there are 2 layers, 1) UI Layer, 2) Data Layer.

* UI Layer - The layer which we are developing on the front page.

* Data Layer - The backend data which gets dynamically integrated with the UI layer.

* A good senior front end developer is a very good UI layer engineer as well as data layer engineer.

* Filter, map, reduce is like bread and butter of react applications.

*** Whenever you are looping through any array/list you have to give a key property, in the key object you have to pass an unique id. Key = {restaurant.info.id}.

* The need of keys - In React, keys should be unique within a list to help React efficiently identify and update elements during rendering.

* You should not use as indexes as unique keys in react. Its ok but not recommended.

* Using unique key is a must and is considered as a good propgramming practice.



