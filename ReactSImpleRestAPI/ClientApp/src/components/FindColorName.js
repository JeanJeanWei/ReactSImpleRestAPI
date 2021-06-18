import React, { Component } from 'react';

export class FindColorName extends Component {
    static displayName = FindColorName.name;

    constructor(props) {
        super(props);
        this.state = { colors: [], loading: true, hex: '', cname: '', cstyle: '', ostyle: '' };

        this.updateInput = this.updateInput.bind(this);

        this.findName = this.findName.bind(this);
        
    }

    async findName() {
        await this.populateColorData();
        this.setState({
            cname: "Color Name:" + this.state.colors[1].name + " Distance:" +this.state.colors[1].distance,
            cstyle: this.state.colors[1].style,
            ostyle: this.state.colors[0].style
        })
    }

    updateInput(event) {
        this.setState({ hex: event.target.value })
    }
    render() {
        return (
            <div>

                <p>This is a simple example of a React component takes user input and call api endpoints.</p>

                    <label>Color Hex code</label>
                    <input type="text" onChange={this.updateInput} placeholder='Hexcode'></input>
                

                <button className="btn btn-primary" onClick={this.findName}>Fine Closest Color Name</button>
                <p>{this.state.cname}</p>
                <label>Your Color</label>
                <label style={{ backgroundColor: this.state.cstyle }}>{this.state.cstyle}</label>
                <p></p>
                <label>Found Color</label>
                <label style={{ backgroundColor: this.state.ostyle }}>{this.state.ostyle}</label>
            </div>
            
            
            
        );
    }

    static renderColorsTable(colors) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Red</th>
                        <th>Green</th>
                        <th>Blue</th>
                        <th>Hex</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {colors.map(c =>
                        <tr key={c.hex}>
                            <td>{c.name}</td>
                            <td style={{ backgroundColor: c.style }}> </td>
                            <td>{c.red}</td>
                            <td>{c.green}</td>
                            <td>{c.blue}</td>
                            <td>{c.hex}</td>
                            <td>{c.distance}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    async populateColorData() {
        const response = await fetch('/color/closestcolornamebyhex/' + this.state.hex);
        const data = await response.json();
        this.setState({ colors: data, loading: false });
    }

}
