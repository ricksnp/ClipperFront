import React, { useState } from 'react';
import light from '../../Assets/Clipper Logo Light-Theme.png'
import { Form } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import Axios from 'axios';
import './SignupComponent'


export function SignupComponent() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const user = {
            id: 0,
            username: event.currentTarget["username"].value,
            password: event.currentTarget["username"].value,
            firstName: event.currentTarget["firstname"].value,
            lastName: event.currentTarget["lastname"].value,
            email: event.currentTarget["email"].value,
            bio: null,
            pfpLink: "None Yet",
            posts: null,
            likes: null
        }

        Axios.post("http://localhost:8080/Clipper/registerUser.json", user).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });


        setValidated(true);
    };

    return (
        <Form validated={validated ? 1 : 0} onSubmit={handleSubmit} id = 'theFormPosition'>
            <div className="logoarea pt-5 pb-5 row" >
                <a href="/login"><img src={light} height={"48px"} width={"48px"} alt="Logo" /></a><div id = 'innerDiv'>Clipper</div>
            </div>
            <br></br>
            <h3 id = 'commonColor'>Sign Up</h3>

            <div className="form-group">
                <label id = 'commonColor'>Username</label>
                <FormControl type="text" required className="form-control" placeholder="Enter a username" name="username" />
            </div>

            <div className="form-group">
                <label id = 'commonColor'>First name</label>
                <FormControl type="text" required className="form-control" placeholder="Enter a username" name="firstname" />
            </div>

            <div className="form-group">
                <label id = 'commonColor'>Last name</label>
                <FormControl type="text" required className="form-control" placeholder="Enter a username" name="lastname" />
            </div>

            <div className="form-group">
                <label id = 'commonColor'>Email address</label>
                <FormControl type="email" required className="form-control" placeholder="Enter email" name="email" />
            </div>

            <div className="form-group">
                <label id = 'commonColor'>Password</label>
                <FormControl type="password" required className="form-control" placeholder="Enter password" name="password" />
            </div>

            <div className="form-group">
                <label id = 'commonColor'>Confirm Password</label>
                <FormControl type="password" required className="form-control" placeholder="Re-enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block" id = 'commonBackground'>Submit</button>
            <p className="forgot-password text-right" id = 'commonColor' >
                Already have an account? <a href="/login">Login</a>
            </p>
        </Form>
    );


}