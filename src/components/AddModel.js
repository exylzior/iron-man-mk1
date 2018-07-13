import React, { Component } from 'react';
import { Button } from 'mdbreact';
import database from "../firebase";
import { MAIN_COLLECTION } from '../constants';




const _AddModel = function () {

	class AddModelPresentational extends Component {
		render() {
			return (
				<div className="row">
					<form>
						<label>Document ID <input type="text" name="docID" onChange={this.props.handleInputChange} /> </label>
						<label>Collection Name <input type="text" name="collection" onChange={this.props.handleInputChange} /> </label>
						<label>Application Description <input type="text" name="applicationDesc" onChange={this.props.handleInputChange} /> </label>
						<label>Fan Title<input type="text" name="fanTitle" onChange={this.props.handleInputChange} /> </label>
						<label>Image <input type="text" name="image" onChange={this.props.handleInputChange} /> </label>
						<label>Max Capacity <input type="number" name="maxCapacity" onChange={this.props.handleInputChange} /> </label>
						<label>Max Pressure <input type="number" name="maxPressure" onChange={this.props.handleInputChange} /> </label>
						<label>Max Size <input type="number" name="maxSize" onChange={this.props.handleInputChange} /> </label>
						<label>Min Size <input type="number" name="minSize" onChange={this.props.handleInputChange} /> </label>
						<label>unitCapacity <input type="text" name="unitCapacity" onChange={this.props.handleInputChange} /> </label>
						<label>unitPressure <input type="text" name="unitPressure" onChange={this.props.handleInputChange} /> </label>
						<label>unitSize <input type="text" name="unitSize" onChange={this.props.handleInputChange} /> </label>
					</form>
					<Button onClick={this.props.addFanModel}>Add Model</Button>
					
				</div>
			);


		}

	}


	class AddModelContainer extends Component {
		constructor() {
			super();
			this.state = {
				
					collection: "",
					applicationDesc: "",
					image: "",
					fanTitle: "",
					listOfModel: {},
					maxCapacity: "",
					maxPressure: "",
					maxSize: "",
					minSize: "",
					unitCapacity: "",
					unitPressure: "",
					unitSize: "",			}

		}

		validateDocName = () => {
			console.log("validated")
		}

		addFanModel = () => {
			const { docID, collection, applicationDesc, image, fanTitle, maxCapacity, maxPressure, maxSize, minSize, unitCapacity, unitPressure, unitSize } = this.state
			const fanRef = database.collection(MAIN_COLLECTION).doc(docID)
			
			fanRef.set({
				collection,
				applicationDesc,
				image,
				fanTitle,
				maxCapacity,
				maxPressure,
				maxSize,
				minSize,
				unitCapacity,
				unitPressure,
				unitSize
			}).then(function () {
				console.log("New model successfully written!");
			})
				.catch(function (error) {
					console.error("Error writing document: ", error);
				});
		}

		
		handleInputChange = (event) => {
			const target = event.target;
			console.log(target.name)
			this.setState({
				fangroup: {
					[target.name]: target.value
				}
			})

		}

		render() {
			return (
					<AddModelPresentational
						addFanModel={this.addFanModel}
						validateDocName={this.validateDocName}
						handleInputChange={this.handleInputChange} />
			);


		}

	}

	return AddModelContainer

}();

export default _AddModel;