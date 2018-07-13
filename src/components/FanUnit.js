import React, { Component } from 'react';
import database from "../firebase";




const _FanUnit = function () {

	class FanUnitPresentational extends Component {
		render() {
			return (
				<div className="col-md-4 col-lg-4 col-sm-12">
					<ul>
						<li>{this.props.data.unitName}</li>
						<li>{this.props.data.fanSpeed}</li>
						<li>{this.props.data.fanType}</li>
						<li>{this.props.data.condition}</li>
						<li>{this.props.data.airVolume}</li>
						<li>{this.props.data.staticEff}</li>
						<li>{this.props.data.totalEff}</li>
						<li>{this.props.data.maxTemp}</li>
						<li>{this.props.data.minTemp}</li>
					</ul>
				</div>
			);


		}

	}


	class FanUnitContainer extends Component {
		constructor() {
			super();
			this.state = {
				cards: []
			}

		}

		componentWillMount() {
			console.log(this.props.match.params)
			
			const fanRef = database.doc(`${this.props.match.params.group}/${this.props.match.params.value}`).get();
			fanRef.then(
				(snap) => {
					let data = snap.data()
					console.log(data);
					this.setState({ cards: data })
				}
			).catch(error => {
				console.log(error);
				// Response.status(500).send(error);
			})





		}


		render() {
			return (
				<div className="row">
					<FanUnitPresentational data={this.state.cards} />
				</div>
			);


		}

	}

	return FanUnitContainer

}();

export default _FanUnit;