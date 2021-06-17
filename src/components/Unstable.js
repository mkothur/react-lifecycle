import React from 'react'

const Unstable =React.memo(function (props) {
    console.log('Rendered Unstable component');
    return (
        <div>
            <h2>{props.value}</h2>
        </div>
    )
})

export default Unstable;
