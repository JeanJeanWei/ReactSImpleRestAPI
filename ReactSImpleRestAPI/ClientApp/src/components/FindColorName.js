import React, { Component } from 'react';

export class FindColorName extends Component {
    static displayName = FindColorName.name;

    constructor(props) {
        super(props);
        this.state = { colors: [], loading: true, hex: '' };

        this.updateInput = this.updateInput.bind(this);

        this.findName = this.findName.bind(this);
    }

    async findName() {
        await this.populateColorData();
    }

    updateInput(event) {
        this.setState({ hex: event.target.value })
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component takes user input and call api endpoints.</p>

                <div className="form-group">
                    <label>Color Hex code</label>
                    <input type="text" onChange={this.updateInput} placeholder='Hexcode'></input>
                </div>

                <button className="btn btn-primary" onClick={this.findName}>Fine Cloest Color Name</button>
            </div>
        );
    }

    async populateColorData() {
        const response = await fetch('/color/closestcolornamebyhex/' + this.state.hex);
        const data = await response.json();
        this.setState({ colors: data, loading: false });
    }
}
