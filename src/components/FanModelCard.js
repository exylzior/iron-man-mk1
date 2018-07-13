import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import database from "../firebase";
import { Link } from 'react-router-dom';




const _FanModelCard = function () {

class FanModelListPresentational extends Component{
	render() {
		
		return(
			<div className="col-md-4 col-lg-4 col-sm-12 card-space">
                    <Card>
                        <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <CardBody>
							{/* <CardTitle><Link to={`/unit/${this.props.model}/${this.props.data.id}`}>{this.props.data.unitName}</Link></CardTitle> */}
							<CardTitle><Link to="#">{this.props.data.unitName}</Link></CardTitle>
                            <CardText>{this.props.data.fanType}</CardText>
                        </CardBody>
                    </Card>
                </div>
		);
		
		
    }
	
}


class FanModelListContainer extends Component{
	constructor() {
		super();
		this.state = {
			cards:[]
		}

	}

	componentWillMount() {
		const fanRef = database.collection(this.props.match.params.value).get();
		fanRef.then(
			(snap) => {
				let list = snap.docs.map((doc) => {
					const data = doc.data()
					const id = doc.id;
					return {id, ...data};
				})
				this.setState({ cards: list })
			}
		).catch(error => {
			console.log(error);
			// Response.status(500).send(error);
		})

		



	}
	
	
	render() {
		return(
			<div className="row">
                    {
                        this.state.cards.map((item, index) => {
                            return (
                                <FanModelListPresentational key={Math.random()} data={item} model={this.props.match.params.value} />
                            );
                        })
                    }
                </div>
		);
		
		
    }
	
}

return FanModelListContainer

} ();

export default _FanModelCard;