import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputAndTable from './examples/InputAndTable'
import PropsWithTypeScript from './examples/PropsWithTypeScript'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h2>Vite + React</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <div className="read-the-docs">
                {/* <InputAndTable /> */}
                <PropsWithTypeScript
                    name={'Minh'}
                    age={38}
                />
            </div>
        </div>
    )
} 1

export default App
