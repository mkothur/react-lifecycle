import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            countries: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    callApi() {
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.name}?fullText=true`)
        .then(res => res.json())
        .then(data => 
           this.setState({
               loading: true,
               countries: data[0]
           })
        )
    }

    render() {
        return (
            <div>
                
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.callApi.bind(this)}>Get</button><br/><br/>
                 Capital city: <p>{this.state.loading ? this.state.countries.capital : '.'}</p>
            </div>
        )
    }
}

export default Test;
