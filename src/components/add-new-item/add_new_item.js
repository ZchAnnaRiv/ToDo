import React from 'react';
import './add_new_item.css';

class AddNewItem extends React.Component{

    state={
        label:'',
    }

    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value,
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: '',
        })
    }
    render() {
        return(
            <form className='add-item-field' onSubmit={this.onSubmit}>
                <input className='add-box'
                       type='text'
                        onChange={this.onLabelChange}
                       placeholder='what to do?'
                       value={this.state.label}
                />
                <button className='add-btn' onClick={() => this.props.onItemAdded}>Add</button>
            </form>
        );
    }
}

export default AddNewItem;