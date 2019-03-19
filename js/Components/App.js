import React from 'react';
import {SearchBar} from "./SearchBar";
import {CatTable} from "./CatTable";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            likesKids: false
        }
    }

    handleOnChangeFilter = (event) => {
        this.setState({
            filterText: event.target.value
        })
    };

    handleOnChangeCheckbox = (event) => {
        this.setState({
            likesKids: event.target.checked
        })
    };

    get kitties() {
        const regex = new RegExp(this.state.filterText);
        return this.props.kitties.filter((item) => (
            (!this.state.likesKids || item.likesKids === this.state.likesKids) &&
            (regex.test(item.name))
        ))
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           onChangeFilter={this.handleOnChangeFilter}
                           likesKids={this.state.likesKids}
                           onChangeLikesKids={this.handleOnChangeCheckbox}
                />
                <CatTable kitties={this.kitties}
                />
            </div>
        )
    }
}