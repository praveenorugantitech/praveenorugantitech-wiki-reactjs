import React, {Component} from 'react';

export default class ResultList extends Component {

    render() {
		if(this.props.results[0]!=='' && this.props.results[1] == ''){
            return (<h1 class="notFound">No Results Found</h1>);
		}
        let results = this.props.results[1].map((result, index) => {
            return (
                <div key={index}>
                    <h3>{this.props.results[1][index]}</h3>
                    <p>{this.props.results[2][index]}</p>
                    <a href={this.props.results[3][index]}
                       target="_blank" rel="noopener noreferrer">{this.props.results[3][index]}</a>
                    <hr/>
                </div>
            )
        });
        return (
            <div>
                {results}
            </div>);
    }
}