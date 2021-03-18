import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', reviews: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.reviews = [];
    };
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleClick(event) {
        alert('Your written review was submitted');
        const value = event.target.value;
        console.log(value);
        console.log(this.props.starsValue);
        const review = this.props.starsValue + this.state.value + ' ';
        this.reviews.push(review);
        console.log(this.reviews);
        this.props.updateReviews(this.reviews);
        this.setState({...this.state, rating: event.target.value})
    }
    render() {
        return (
            <div>
                <div>
                    Write a review:
                    <input onChange={this.handleChange} value= {this.state.value} />
                    <button onClick= {this.handleClick} >Submit Review </button>
                </div>            

            </div>
        );        
    }
}
export default ReviewForm;
