import React from 'react';
import Stars from './stars.js';
import ReviewForm from './reviewform.js';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { starsValue: '' };
        this.state.reviews = [];
    };
    starsOnChange(value) {
        this.setState({ 'starsValue': value });
    };
    updateReviews(reviews){
        this.setState({reviews})
    }
    render() {
        console.log(this.state.reviews);
        return(
            <div className="card">
                <div className="card-body">
                    <img src={ this.props.poster} alt="poster" />
                    <h4 className="card-title">{ 'Movie Title: ' + this.props.Title }</h4>
                </div>
                <div className="card-footer">
                    <Stars onChange={ (value) => this.starsOnChange(value) }/>
                    <ReviewForm starsValue={this.state.starsValue + ' '} 
                        updateReviews={ (reviews) => this.updateReviews(reviews)} 
                    />
                    <p><span>{ this.state.reviews }</span></p>
                </div>                               
            </div>             
        );
    }
}
export default Movie;

