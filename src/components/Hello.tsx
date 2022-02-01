import {h, FunctionalComponent} from "preact";
import { useState } from 'preact/hooks'

export const Hello: FunctionalComponent = () => {
    const [count, setCount] = useState(0)
    const handleclick=()=> {
        setCount(count+1)
    }
    return <div><p>hello {count}</p><button onClick={handleclick}>plus</button></div>
}