import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import database from "../firebase";
import { MAIN_COLLECTION } from '../constants'
import { Link } from 'react-router-dom';
import './Cards.css'


const _FanGroupCard = function () {

    class FanGroupCardPresentational extends Component {

        render() {
            return (
                <div className="col-md-4 col-lg-4 col-sm-12 card-space">
                    <Card>
                        <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <CardBody >
                            <CardTitle><Link to={`/model/${this.props.data.collection}`}>{this.props.data.fanTitle}</Link></CardTitle>
                            <CardText>{this.props.data.applicationDesc}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );


        }
    }


    class FanGroupCardContainer extends Component {
        constructor() {
            super();
            this.state = {
                cards: [],
                fangroup: {
                    id: "",
                    idapplicationDesc: "",
                    fanTitle: "",
                    image: "",
                    listOfModel: {},
                    maxCapacity: "",
                    maxPressure: "",
                    maxSize: "",
                    minSize: "",
                    unitCapacity: "",
                    unitPressure: "",
                    unitSize: ""
                }
            }
        }

        componentWillMount() {
            const fanRef = database.collection(MAIN_COLLECTION).get();
            fanRef.then(
                (snap) => {
                    const list = snap.docs.map((doc) => {
                        const data = doc.data()
                        const id = doc.id;
                        return { id, ...data };
                    })
                    this.setState({ cards: list })

                }
            ).catch(error => {
                console.log(error);
                // Response.status(500).send(error);
            })
        }



        render() {
            return (

                <div className="row">
                    {
                        this.state.cards.map((item, index) => {
                            return (
                                <FanGroupCardPresentational key={Math.random()} data={item} />
                            );
                        })
                    }
                </div>
            )

        }
    }



    return FanGroupCardContainer;


}();

export default _FanGroupCard