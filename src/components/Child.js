const Child = (props) => {
    return (
        <button onClick={() => props.changeMe('child')}>Click me</button>
    )
}

export default Child;