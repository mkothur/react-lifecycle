import React from "react";
import Select from 'react-select'

const MultiSelect = () => {
    const options = [
        {value: 'HTML5', label: 'HTML5'},
        {value: 'CSS3', label: 'CSS3'},
        {value: 'FlexBox', label: 'FlexBox'},
        {value: 'Grid Layout', label: 'Grid Layout'},
        {value: 'Javascript', label: 'Javascript'},
        {value: 'ES6', label: 'ES6'},
        {value: 'ReactJS', label: 'ReactJS'},
        {value: 'Angular', label: 'HTML5'},
        {value: 'HTML5', label: 'Angular'},
        {value: 'Redux', label: 'Redux'},
        {value: 'Redux-Saga', label: 'Redux-Saga'},
        {value: 'CoreJAVA', label: 'RxJS'},
        {value: 'RxJS', label: 'CoreJAVA'},
        {value: 'NextJS', label: 'NextJS'},
        {value: 'GatsByJS', label: 'GatsByJS'},
        {value: 'ThreeJS', label: 'ThreeJS'},
        {value: 'NodeJS', label: 'NodeJS'},
        {value: 'ExpressJS', label: 'ExpressJS'},
        {value: 'REST API', label: 'REST API'},
        {value: 'GraphQL', label: 'GraphQL'},
        {value: 'Webpack', label: 'Webpack'},
        {value: 'SPA', label: 'SPA'},
        {value: 'CI/CD', label: 'CI/CD'},
        {value: 'Git Versioning', label: 'Git Versioning'},
        {value: 'Micro Front End', label: 'Micro Front End'},
    ]
    const styles = {
        multiValue: styles => {
            return {
                ...styles,
                backgroundColor: 'green'
            }
        }
    }

    return <Select options={options} isMulti closeMenuOnSelect={false} styles={styles}/>
}

export default MultiSelect