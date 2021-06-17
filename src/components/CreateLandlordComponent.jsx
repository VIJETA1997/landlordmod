import React, { Component } from "react";
import LandlordService from "../services/LandlordService";

class CreateLandlordComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landlordId: this.props.match.params.landlordId,
      name: "",
      age: "",
      
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.saveOrUpdateLandlord = this.saveOrUpdateLandlord.bind(this);
  }

  componentDidMount() {
    if (this.state.landlordId === "_add") {
      return;
    } else {
      LandlordService.viewLandlord(this.state.landlordId).then((res) => {
        let landlord = res.data;
        this.setState({ name: landlord.name, age: landlord.age });
      });
    }
  }
  saveOrUpdateLandlord = (e) => {
    e.preventDefault();
    let landlord = { name: this.state.name, age: this.state.age };
    console.log("landlord => " + JSON.stringify(landlord));

    if (this.state.landlordId === "_add") {
      LandlordService.addLandlord(landlord).then((res) => {
        this.props.history.push("/landlord");
      });
    } else {
      LandlordService.updateLandlord(landlord).then((res) => {
        this.props.history.push("/landlord");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  cancel() {
    this.props.history.push("/landlord");
  }

  getTitle() {
    if (this.state.landlordId === "_add") {
      return <h3 className="text-center">Add Landlord</h3>;
    } else {
      return <h3 className="text-center">Update Landlord</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Age: </label>
                    <input
                      placeholder="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                    </div>
                    
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateLandlord}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLandlordComponent;
