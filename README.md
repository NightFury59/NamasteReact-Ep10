 10 -
 
 * We will make the visuals of our app attractive in this episode.
 
 * We'll do it by a CSS framework.
 
 * Sass and Scss is like a superpower by which we can make it easier to write our CSS. But it is not recommended to write CSS like this.
 
 ** styled-components - It is also another way to write CSS in our app.
 
 * By using CSS libraries and frameworks we get pre-built components. Which we import in our app.
 
 * Material UI, Bootstrap, Chakra UI, ant design are all CSS libraries and frameworks.
 
 * In our project we will style our components using Tailwind CSS.
 
 * Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.
 
 * When we install tailwind css in our project we will get a tailwind.config.js file in our project.
 
 * Our parcel needs postcssrc to read tailwind.
 
 * postcssrc is kind of a way that our project understands what is written inside our tailwind.
 
 ** !!! We will now delete everything which have written till now in our index.css file, and just write the three lines which was provided in tailwind.css configuration steps - @tailwind base;
@tailwind components;
@tailwind utilities;
