import React, { Component } from "react";
import LandlordService from "../services/LandlordService";

class ViewLandlordComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landlordId: this.props.match.params.landlordId,
      landlord: { flat: { flatAddress: {} } },
    };
  }

  componentDidMount() {
    LandlordService.viewLandlordById(this.state.landlordId).then((res) => {
      this.setState({ landlord: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Landlord Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Landlord Id: </label>
              <div> {this.state.landlord.landlordId}</div>
            </div>
            <div className="row">
              <label> Landlord Name: </label>
              <div> {this.state.landlord.landlordName} </div>
            </div>
            <div className="row">
              <label> Landlord Age: </label>
              <div>{this.state.landlord.landlordAge} </div>
            </div>
            <div className=" form-group row">
              <label className="form-label col-6"> Flat Address: </label>
              <div>{`${this.state.landlord.flat.flatAddress.houseNo} ${this.state.landlord.flat.flatAddress.street} ${this.state.landlord.flat.flatAddress.city} ${this.state.landlord.flat.flatAddress.state} ${this.state.landlord.flat.flatAddress.pin} ${this.state.landlord.flat.flatAddress.country} `}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLandlordComponent;
