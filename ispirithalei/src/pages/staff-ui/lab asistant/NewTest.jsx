import './newtest.css'
import Swal from 'sweetalert2'
import { React, useState } from 'react';
import TestDataService from '../../../services/tests.service';

const initialValues = {
    specimenid: '',
    patientsname: '',
    contactnumber: '',
    dateofbirth: '',
    testtype: '',
    collectedperson: '',

};

export default function NewTest() {
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        console.log(e)
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const addTest = (event) => {
        event.preventDefault()
        Swal.fire(
            'Test Subbmitted!',
            'You have subbmitted the test!',
            'success'
          )
        var data = {
            specimenid: values.specimenid,
            patientsname: values.patientsname,
            contactnumber: values.contactnumber,
            dateofbirth: values.dateofbirth,
            testtype: values.testtype,
            collectedperson: values.collectedperson,
        };
        TestDataService.create(data)
            .then(response => {
                setValues({
                    specimenid: response.data.specimenid,
                    patientsname: response.data.patientsname,
                    contactnumber: response.data.contactnumber,
                    dateofbirth: response.data.dateofbirth,
                    testtype: response.data.testtype,
                    collectedperson: response.data.collectedperson,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
            setValues(initialValues)
    };



return (
    <div className="newUser">
        <span className="newUserTitle">New Test Form</span>
        <div class="detailsbock1">
            <span className="newUserTitle1">Details</span>
            <div class="detailsbock">
                <form className="newUserForm" onSubmit={addTest}>
                    <div className="newUserItem">
                        <label>Patients Name</label>
                        <input
                            value={values.patientsname}
                            name="patientsname"
                            required
                            type="text"
                            placeholder="Enter Patient Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Specimen ID</label>
                        <input
                            value={values.specimenid}
                            name="specimenid"
                            type="text"
                            required
                            minlength="3"
                            maxlength="3"
                            placeholder="Enter Specimen ID"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Contact Number</label>
                        <input
                            value={values.contactnumber}
                            name="contactnumber"
                            type="text"
                            minlength="10"
                            maxlength="10"
                            required
                            placeholder="Enter Contact Number"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Age of the patient</label>
                        <input
                            value={values.dateofbirth}
                            name="dateofbirth"
                            type="text"
                            required
                            placeholder="Enter Patients Age"
                            onChange={handleInputChange}
                        />
                    </div>
                    {/*<div className="newUserItem">
                            <label>Date of Birth</label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                                </div>*/}
                    {/*<div className="newUserItem">
                            <label>Test Type</label>
                            <div className="newUserGender">
                                <input type="radio" name="testtype" id="TSH" value="TSH" />
                                <label for="TSH">TSH</label>
                                <input type="radio" name="testtype" id="FBC" value="FBC" />
                                <label for="FBC">FBC</label>
                                <input type="radio" name="testtype" id="COVID19" value="COVID19" />
                                <label for="COVID19">COVID-19</label>
                                <input type="radio" name="testtype" id="BG" value="BG" />
                                <label for="BG">Blood Glucose</label>  
                            </div>
                            </div>*/}
                    <div className="newUserItem">
                        <label>Test Type</label>
                        <input
                            value={values.testtype}
                            name="testtype"
                            type="text"
                            required
                            placeholder="Enter test type"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Collected Person Name</label>
                        <input
                            value={values.collectedperson}
                            name="collectedperson"
                            ype="text"
                            required
                            placeholder="Enter the collected person name"
                            onChange={handleInputChange}
                        />
                    </div>
                    {/*<div className="newUserItem">
                            <label>Sample Collected Person</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="Jagath">Jagath</option>
                                <option value="Kalusundara">Kalusundara</option>
                            </select>
                        </div>*/}
                    <div className="newUserItem1">
                        <label>Before subbmit results please double check</label>
                    </div>
                    <button className="newUserButton">Subbmit the Sample</button>
                </form>
            </div>
        </div>
    </div>
)
}
