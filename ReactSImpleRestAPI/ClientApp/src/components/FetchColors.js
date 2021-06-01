import React, { Component } from 'react';

export class FetchColors extends Component {
    static displayName = FetchColors.name;

    constructor(props) {
        super(props);
        this.state = { colors: [], loading: true };
    }

    async componentDidMount() {

        await this.populateColorData();
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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchColors.renderColorsTable(this.state.colors);

        return (
            <div>
                <h1 id="tabelLabel" >Colors</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateColorData() {
        const response = await fetch("/color/allcolordata");
        const data = await response.json();
        this.setState({ colors: data, loading: false });
    }


}
