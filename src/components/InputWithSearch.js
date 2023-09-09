import React, { useState } from 'react';

const InputWithSearch = () => {
      const [selectOption, setOption] = useState('')
      let options = ["C", "C++", "Javascript", "Angular", "ReactJS", "NodeJS", "HTML5", "CSS3", "GraphQL", "ThreeJS", "FlexBox", "DevOps"]
    return (
        <>
            <input list="courses" onChange={(e) => setOption(e.target.value)}/>
            <datalist id="courses">
                {options.map((opt, id) => <option key={id}>{opt}</option>)}
            </datalist>
            <p>{`Selected Course is ${selectOption} `}</p>
        </>
    )
}
export default InputWithSearch;