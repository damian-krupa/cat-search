import React from 'react';

export class SearchBar extends React.Component {

    handleSearchChange = (event) => {

    };

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="Search..."
                       value={this.props.filterText}
                       onChange={this.props.onChangeFilter}
                />
                <p>
                    <input type="checkbox"
                           value={this.props.likesKids}
                           onChange={this.props.onChangeLikesKids}
                    />
                    Only show kitties that like kids
                </p>
            </form>
        )
    }
}