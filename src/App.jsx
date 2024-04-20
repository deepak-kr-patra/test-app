import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bigbox'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <div className='bottom'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam dolorem molestias debitis, nesciunt id recusandae possimus quae sequi aliquam, dicta, placeat natus! Fugiat perspiciatis impedit nihil, harum provident consequuntur. Quisquam nobis, ullam quam nostrum iure perspiciatis. Libero sit alias eligendi nam nisi fugit at laboriosam minima, enim quisquam veritatis beatae ad ex laborum, dolorem necessitatibus! Mollitia iste quam alias accusantium harum non est voluptatibus eligendi esse facilis, sequi suscipit fugit veniam? Doloribus modi ea fuga quo tempora odit aperiam labore temporibus. Asperiores, eveniet alias optio accusantium ratione vitae error. Doloremque sapiente, minus quibusdam excepturi perspiciatis aliquam voluptatibus similique? Eligendi.
        </div>
      </div>
    </>
  )
}

export default App
