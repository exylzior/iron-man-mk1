import React, { Component } from 'react';
import { AddUnit, AddModel } from './_Index';




const _FanBuild = function () {

	class FanBuildPresentational extends Component {
		render() {
			return (
				<div className="row">
					<AddModel/>
					<AddUnit />
				</div>
			);


		}

	}


	class FanBuildContainer extends Component {
		constructor() {
			super();
			this.state = {

				
			}

		}

		validateDocName = () => {
			console.log("validated")
		}

		render() {
			return (
				<FanBuildPresentational />
			);


		}

	}

	return FanBuildContainer

}();

export default _FanBuild;