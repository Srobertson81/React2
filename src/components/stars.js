import React from 'react';

class Stars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);       
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        this.props.onChange(event.target.value);
        alert('your review is submitted!' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick stars for review:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="⭐">⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                        <input type="submit" value="Submit"/>
                    </select>
                </label>
            </form>
            </React.Fragment>
        );       
    }
}
export default Stars;