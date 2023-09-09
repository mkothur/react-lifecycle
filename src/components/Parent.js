import { useState } from "react";
import Child from './Child'

const Parent = () => {
    const [text, setText] = useState('parent');
    return (
        <>
            <Child changeMe={(text) => setText(text)} />
            <h2>{text}</h2>
        </>
    )
}

export default Parent;