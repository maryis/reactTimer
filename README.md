------------ ES, JSX, Bable ---------------------
- ECMAScript (or ES) is a scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. It was created to standardize JavaScript to help foster multiple independent implementations. JavaScript has remained the best-known implementation of ECMAScript since the standard was first published, with other well-known implementations including JScript and ActionScript.ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js.
- JSX is an XML-like syntax extension to ECMAScript and not necessarily tied to React at all. React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages and make it easier and more intuitive to create React components. every JSX syntax turns into JS function calls.
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ (ES6) code into a backwards compatible version of JavaScript(ES5) in current and older browsers or environments
-------------------------------------------
* The code has some good comments.

the steps:
- install node


- in destination folder:
-   >npx create-react-app  firstapp
-------------

add my component (TimerSample in myTimer.js)
change ReactDOM.render to render my component as the root
and execute this command in the app path

-   >npm start

------------
My notes:
- the only obligated method of component: render
- you should not update state in render, because every change in state will result in a new render
- react is moving toward using much more functional components and less suage of class component
- React component lifecycle has three categories – Mounting, Updating and UnMounting.

- The render() is the most used lifecycle method.

  - It is a pure function.
  
  - You cannot set state in render()
  
- The componentDidMount() happens as soon as your component is mounted.

  - You can set state here but with caution.
  
- The componentDidUpdate(prevProps) happens as soon as the updating happens.

  - You can set state here but with caution.
  
- The componentWillUnmount() happens just before the component unmounts and is destroyed.

  - This is a good place to cleanup all the data.
  
  - You cannot set state here.
  

