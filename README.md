The code has some good comments.

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
  

