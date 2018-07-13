import React, { Component } from 'react';
import database from "../firebase";
import { Button } from 'mdbreact';
import Select from 'react-select';
import { MAIN_COLLECTION } from '../constants'
import 'react-select/dist/react-select.css';




const _AddUnit = function () {

	class AddUnitPresentational extends Component {
		render() {
			return (
				<div className="">
					<form>
						<Select name="form-field-name"
							value={this.props.value}
							onChange={this.props.handleChange}
							valueKey="collection"
							labelKey="fanTitle"
							options={this.props.productList}
						/>
						<label>Unit Name <input type="text" name="unitName" onChange={this.props.handleInputChange} /> </label>
						<label>Air Temperature <input type="text" name="airTemp" onChange={this.props.handleInputChange} /> </label>
						<label>Condition <input type="text" name="condition" onChange={this.props.handleInputChange} /> </label>
						<label>Fan Speed<input type="number" name="fanSpeed" onChange={this.props.handleInputChange} /> </label>
						<label>Fan Type <input type="text" name="fanType" onChange={this.props.handleInputChange} /> </label>
						<label>Maximum Temperature <input type="number" name="maxTemp" onChange={this.props.handleInputChange} /> </label>
						<label>Minimum Temperature <input type="number" name="minTemp" onChange={this.props.handleInputChange} /> </label>
						<label>Fan Static Efficiency <input type="number" name="staticEff" onChange={this.props.handleInputChange} /> </label>
						<label>Fan Total Efficency<input type="number" name="totalEff" onChange={this.props.handleInputChange} /> </label>
						<label>Unit Air Volume <input type="text" name="unitAirVol" onChange={this.props.handleInputChange} /> </label>
						<label>Unit Speed <input type="text" name="unitPressure" onChange={this.props.handleInputChange} /> </label>
						<label>Unit Temperature <input type="text" name="unitTemp" onChange={this.props.handleInputChange} /> </label>
					</form>
					<Button onClick={this.props.addUnitModel}>Add Unit</Button>
				</div>
			);


		}

	}


	class AddUnitContainer extends Component {
		constructor() {
			super();
			this.state = {
				unitName: "",
				airTemp: 0,
				condition: "",
				fanSpeed: 0,
				fanType: "",
				maxTemp: 0,
				minTemp: 0,
				staticEff: 0,
				totalEff: 0,
				unitAirVol: "",
				unitPressure: "",
				unitTemp: "",
				productList:[],
				selectedOption:""
			}

		}

		
		componentWillMount(){
			const fanRef = database.collection(MAIN_COLLECTION).get();
            fanRef.then(
                (snap) => {
                    const list = snap.docs.map((doc) => {
                        const { collection, fanTitle } = doc.data()
                        return { collection, fanTitle};
                    })
					this.setState({ productList: list })
                }
            ).catch(error => {
                console.log(error);
                // Response.status(500).send(error);
            })
		}

		addUnitModel = () => {
			const { unitName, selectedOption, airTemp, condition, fanSpeed, fanType, maxTemp, minTemp, staticEff, totalEff, unitAirVol, unitPressure,unitTemp } = this.state
			
			const fanRef = database.collection(selectedOption.collection).doc(unitName)
			fanRef.set({
				unitName,
				airTemp,
				condition,
				fanSpeed,
				fanType,
				maxTemp,
				minTemp,
				staticEff,
				totalEff,
				unitAirVol,
				unitPressure,
				unitTemp
			}).then(function () {
				console.log("New unit successfully written!");
			})
				.catch(function (error) {
					console.error("Error writing document: ", error);
				});
		}

		handleChange = (selectedOption) => {
			this.setState({ selectedOption });
		}

		handleInputChange = (event) => {
			const target = event.target;
			this.setState({
				[target.name]: target.value
			})

		}

		



		render() {
			return (

				<AddUnitPresentational
					addUnitModel={this.addUnitModel}
					addUnitList={this.addUnitList}
					value={this.state.selectedOption}
					handleInputChange={this.handleInputChange}
					handleChange={this.handleChange}
					productList={this.state.productList}
				/>

			);


		}

	}

	return AddUnitContainer

}();

export default _AddUnit;