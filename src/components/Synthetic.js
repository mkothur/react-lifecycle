import React from 'react';

class Synthetic extends React.Component {
    constructor() {
        super();
        this.state = {
            currentEvent: '___'
        }
        this.update = this.update.bind(this)
    }
    clickhandler(e) {
        // e.persist();
        setTimeout(() => {
            console.log('tag name is: ', e.target.tagName)
        }, 200)
    }
    update(e) {
        this.setState({currentEvent: e.type})
    }
    render() {
        return (
            <>
                <textarea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onBlur={this.update}
                    onFocus={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchEnd={this.update}
                    onTouchMove={this.update}
                    cols="30"
                    rows="10"/>
                <h2>{this.state.currentEvent}</h2>
                <div onClick={this.clickhandler.bind(this)}>
                    Click me to know tag name
                </div>
            </>
        )
    }
}

export default Synthetic;
