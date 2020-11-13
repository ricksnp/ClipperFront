import React, { useState } from 'react';
import light from '../../Assets/Clipper Logo Light-Theme.png'
import { Form } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import './ResetPassComponent.scss';
import { IRootState } from '../../_reducers';
import { IUser } from '../../_reducers/UserReducer';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../../_util/axiosConfig';


export function ResetPassComponent() {

    let failed = false;

    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);



    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        

        axiosInstance.post('/resetPass.json', {email:event.currentTarget["email"].value})
        .then(resp => {
            setValidated(true);
            // console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            // console.error(err);
        });

       if (validated){
           return <Redirect to="/login"/>
       }
        };

    return (
        <Form validated={validated ? 1 : 0} onSubmit={handleSubmit} id = 'theFormPosition'>
            <div className="logoarea pt-5 pb-5 row" >
                <Link to="/login"><img src={light} height={"48px"} width={"48px"} alt="Logo" /></Link><div id = 'commonColor' className = 'forClipper'>Clipper</div>
            </div>
            <br></br>
            <h3 id = 'commonColor'>Reset Password</h3><br />

            <div className="form-group" >
                <label id = 'commonColor'>Please enter your account email</label>
                <FormControl type="email" required className="form-control" placeholder="Email" name = "email" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" id = 'commonBackground'>Submit</button>
        </Form>
    );


}