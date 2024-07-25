** Optimizing our App -

* Single Responsibility Principle - Each component should have its single responsibility.

* Keep your component as light as possible.

** Custom Hooks - A custom hook in React is a reusable function that encapsulates and manages stateful logic, allowing you to share and reuse this logic across multiple components.

* If you want to create custom hook files, you should do that in your utils folder.

* Chunking/ Code Splitting/ Dynamic bundling/ Lazy Loading/ On demand loading - To break down our app into smaller logical chunks.

*  We have added grocery option in our header, we will implement lazy loading on it. 

** When our app page will load initially, it will not load the code for grocery, only when will go to our grocery page then only the code for grocery will be loaded.

* To do this lazy loading/ on demand loading, we will not import our component as we normally do, we will import it like const Grocery = lazy(() => (//path to Grocery component));

* And lazy is a named import given to us by react, we will load lazy like import { lazy } from 'react';

** Suspense component - Suspense in React is a component that allows you to handle the loading state of asynchronous operations, such as fetching data or loading components, by providing a fallback UI until the operation completes. It helps in improving user experience by displaying a placeholder (like a loading spinner) while the data or component is being fetched or loaded.