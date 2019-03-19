import React from 'react';
import {CatRow} from "./CatRow";

export class CatTable extends React.Component {
    get male() {
        return this.props.kitties.filter(kitty => kitty.category === 'male') || [];
    }

    get female() {
        return this.props.kitties.filter(kitty => kitty.category === 'female') || [];
    }
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {this.male.length > 0 &&
                <tr>
                    <th colSpan="2">Male</th>
                </tr>}
                {this.male.map((maleKitty) => <CatRow kitty={maleKitty}/>)}
                {this.female.length > 0 &&
                <tr>
                    <th colSpan="2">Female</th>
                </tr>}
                {this.female.map((femaleKitty) => <CatRow kitty={femaleKitty}/>)}
                </tbody>
            </table>
        );
    }
}