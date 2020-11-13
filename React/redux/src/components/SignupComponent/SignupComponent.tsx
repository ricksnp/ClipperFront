import React, { useState } from 'react';
import light from '../../Assets/Clipper Logo Light-Theme.png';
import { Form } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import './SignupComponent.scss';
import { IRootState } from '../../_reducers';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../_reducers/UserReducer';
import { axiosInstance } from '../../_util/axiosConfig';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../LoginComponent/LoginComponent';

export function SignupComponent() {

    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(user != null);
    let failed = false;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const newUserDTO = {
            id: 0,
            username: event.currentTarget["username"].value,
            password: event.currentTarget["password"].value,
            firstName: event.currentTarget["firstname"].value,
            lastName: event.currentTarget["lastname"].value,
            email: event.currentTarget["email"].value,
            bio: "",
            pfpLink: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            // posts: [] as IPost[],
            // likes: [] as ILike[]
        }

        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
            const currentUser:IUser|null = (await axiosInstance.post("/registerUser.json", newUserDTO)).data;
            
            
            dispatchInStore({type:"REGISTER", payload: currentUser});
               
            setValidated(getState().userState.currentUser != null);
            failed = validated;
        });
    };



    return (
        <> { validated ? <Redirect to="/home" /> :
            <Form validated={validated ? 1 : 0} onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                <div className="logoarea pt-5 pb-5 row" >
                    <Link to="/login"><img src={light} height={"48px"} width={"48px"} alt="Logo" /></Link>
                    <div style={{ color: "#202430", fontSize: "30px", fontWeight: "bold" }}>Clipper</div>
                </div>
                <br></br>
                <h3 style={{ color: "#202430" }}>Sign Up</h3>

                <div className="form-group">
                    <label style={{ color: "#202430" }}>Username</label>
                    <FormControl type="text" required className="form-control" placeholder="Enter a username" name="username" />
                </div>

                <div className="form-group">
                    <label style={{ color: "#202430" }}>First name</label>
                    <FormControl type="text" required className="form-control" placeholder="Enter first name" name="firstname" />
                </div>

                <div className="form-group">
                    <label style={{ color: "#202430" }}>Last name</label>
                    <FormControl type="text" required className="form-control" placeholder="Enter last name" name="lastname" />
                </div>
 
                <div className="form-group">
                    <label style={{ color: "#202430" }}>Email address</label>
                    <FormControl type="email" required className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label style={{ color: "#202430" }}>Password</label>
                    <FormControl type="password" required className="form-control" placeholder="Enter password" name="password" />
                </div>

                <div className="form-group">
                    <label style={{ color: "#202430" }}>Confirm Password</label>
                    <FormControl type="password" required className="form-control" placeholder="Re-enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{ background: "#202430" }}>Submit</button>
                <p className="forgot-password text-right" style={{ color: "#202430" }} >
                Already have an account? <Link to="/login">Login</Link><br />{failed ? <span>Please enter a unique username and email!</span> : <></>}
                </p>
            </Form>
        }
        </>
    );


}