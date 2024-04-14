import type { Component } from 'solid-js';


const Button = () => {

  const handler = (data, event) => {
    console.log('clicked', data)
  }

  return <button onClick={[handler, 1]}>Click Me</button>
}


const App: Component = () => {
  return (
    <div>
      <Button />
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
    </div>

  );
};



export default App;
