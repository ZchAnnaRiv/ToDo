import React from 'react';
import './search_panel.css';
import ItemFilter from "../item-status-filter/item_status_filter";

class SearchPanel extends React.Component {
    state={
        term: '',
    }
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
    render() {

        return (
            <div className='search-field'>
                <input className='search-box'
                       placeholder='search'
                        value={this.state.term}
                       onChange={this.onSearchChange}
                />
                <ItemFilter/>
            </div>
        );
    }
}

export default SearchPanel;