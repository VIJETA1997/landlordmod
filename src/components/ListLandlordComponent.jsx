import React, { Component } from "react";
import LandlordService from "../services/LandlordService";

class ListLandlordComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landlord: [],
    };
    this.addLandlord = this.addLandlord.bind(this);
    this.editLandlord = this.editLandlord.bind(this);
    this.deleteLandlord = this.deleteLandlord.bind(this);
  }

  deleteLandlord(landlordId) {
    LandlordService.deleteLandlordById(landlordId).then((res) => {
      this.setState({
        landlord: this.state.landlord.filter(
          (landlord) => landlord.landlordId !== landlordId
        ),
      });
    });
  }

  viewLandlord(landlordId) {
    this.props.history.push(`/view-landlord/${landlordId}`);
  }

  editLandlord(landlordId) {
    this.props.history.push(`/update-landlord/${landlordId}`);
  }

  componentDidMount() {
    LandlordService.viewAllLandlord().then((res) => {
      this.setState({ landlord: res.data });
    });
  }

  addLandlord() {
    this.props.history.push("/add-landlord/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Landlord List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addLandlord}>
            {" "}
            Add Landlord
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Landlord Id </th>
                <th> Landlord Name </th>
                <th> Landlord Age </th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.landlord.map((landlord) => (
                <tr key={landlord.landlordId}>
                  <td> {landlord.landlordId} </td>
                  <td> {landlord.landlordName} </td>
                  <td> {landlord.landlordAge} </td>
                  <td>
                    <button
                      onClick={() => this.editLandlord(landlord.landlordId)}
                      className="btn btn-secondary"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteLandlord(landlord.landlordId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewLandlord(landlord.landlordId)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListLandlordComponent;
