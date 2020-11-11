import React, { useState } from 'react';
import light from '../../Assets/Clipper Logo Light-Theme.png'
import { Form } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import './ResetPassComponent.scss';


export function ResetPassComponent() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form validated={validated ? 1 : 0} onSubmit={handleSubmit} id = 'theFormPosition'>
            <div className="logoarea pt-5 pb-5 row" >
                <a href="/login"><img src={light} height={"48px"} width={"48px"} alt="Logo" /></a><div id = 'commonColor' className = 'forClipper'>Clipper</div>
            </div>
            <br></br>
            <h3 id = 'commonColor'>Reset Password</h3><br />

            <div className="form-group" >
                <label id = 'commonColor'>Please enter your account email</label>
                <FormControl type="email" required className="form-control" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" id = 'commonBackground'>Submit</button>
        </Form>
    );


}