import React, { Component } from 'react'
import LandlordService from '../services/LandlordService';

class UpdateLandlordComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            landlordId: this.props.match.params.landlordId,
            name: '',
            age: '',
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        
    }

    componentDidMount() {
        LandlordService.viewLandlordById(this.state.landlordId).then( (res) =>{
            let landlord = res.data;
            this.setState({ name: landlord.name, 
                age: landlord.age, 
                
            });
        });
    }

    updateLandlord = (e) => {
        e.preventDefault();
        let landlord = { name: this.state.name, age: this.state.age} ;
       console.log('landlord => ' + JSON.stringify(landlord));
       
       LandlordService.updateLandlord(landlord).then( res => {
           this.props.history.push('/landlord');
       });
    }


    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    cancel() {
        this.props.history.push('/landlord');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                       <div className = "row">
                           <div className = "card col-md-6 offset-md-3 offset-md-3">
                              <h3 className="text-center">Update Landlord</h3>
                               <div className = "card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Name: </label>
                                           <input placeholder="name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Age: </label>
                                           <input placeholder="age" name="age" className="form-control"
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                       </div>
                                       
                                       <button className="btn btn-success" onClick={this.updateLandlord}>Save</button>
                                       <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={ { marginLeft: "10px"}}>Cancel</button>
                                   </form>
                               </div>
                            </div>
                       </div>
                   </div>
            </div>
        )
    }
}
export default UpdateLandlordComponent