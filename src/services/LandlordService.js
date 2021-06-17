 import axios from 'axios';

const LANDLORD_API_BASED_URL = "http://localhost:8086/flatbooking";

class LandlordService {

    viewAllLandlord() {
        return axios.get(LANDLORD_API_BASED_URL + '/viewAllLandlord');
    }

    viewLandlordById(landlordId) {
        return axios.get(LANDLORD_API_BASED_URL + '/viewLandlord/' + landlordId );
    }

    addLandlord(landlord) {
        return axios.post(LANDLORD_API_BASED_URL + '/addLandlord' , landlord);
    }

    updateLandlord(landlord) {
        return axios.put(LANDLORD_API_BASED_URL + '/updateLandlord' );
    }

    deleteLandlordById(landlordId) {
        return axios.delete(LANDLORD_API_BASED_URL + '/deleteLandlord/' + landlordId);
    }

}

export default new LandlordService()