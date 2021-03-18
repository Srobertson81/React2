import React from 'react';
import Movie from './movie';
import Stars from './stars';

class MovieList extends React.Component {
    render() {
        return(
            <div>
                <Movie stars={ Stars } Title="Ghost Rider" year="2006" poster="https://resizing.flixster.com/MxW31pTFLASw3mJNbInKvf5diGo=/206x305/v2/https://flxt.tmsimg.com/assets/p159753_p_v10_am.jpg"/>
                <Movie stars={ Stars } Title="Avatar" year="2009" poster="https://resizing.flixster.com/kACYoBcDXPDb-kl4iTX4kQPUcaM=/206x305/v2/https://flxt.tmsimg.com/assets/p3542039_p_v8_am.jpg"/>                              
                <Movie stars={ Stars } Title="Eragon" year="2006" poster="https://resizing.flixster.com/JeuCcWewgQkTcY42vbG7bVbpMjs=/206x305/v2/https://flxt.tmsimg.com/assets/p159757_p_v10_aq.jpg"/>
                <Movie stars={ Stars } Title="SCOOB!" year="2020" poster="https://resizing.flixster.com/HggFgVTTIuPyKBdQR7YrHD31kns=/206x305/v2/https://resizing.flixster.com/n1qy9TTenvJvUcBsCi6QCvKstDU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzY0MjAxY2QwLTM1YjMtNDM5MC04YzcxLWQ3MzA1YWRhMzU2ZS53ZWJw"/>
            </div>
        );
    }
}
export default MovieList;
