
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import light from '../../Assets/Clipper Logo Light-Theme.png';
import { login } from '../../_actions/index';
import { Form } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import './LoginComponent.scss';
import { Link, Redirect } from 'react-router-dom';
import { IRootState } from '../../_reducers';
import { axiosInstance } from '../../_util/axiosConfig';
import { IUser } from '../../_reducers/UserReducer';

export const selectCurrentUser = (state:IRootState) => state.userState.currentUser;

export default function LoginComponent(props: any) {

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

        const userDetails = {
            username: event.currentTarget["username"].value,
            password: event.currentTarget["password"].value
        }

        dispatch(async (dispatchInStore:any, getState:() => IRootState) => {
            const currentUser:IUser = (await axiosInstance.post("/login.json", userDetails)).data;

            const userIsEmpty:boolean = Object.keys(currentUser).length == 0;

            console.log("current user: " + currentUser);
            console.log("is empty? " + userIsEmpty);

            dispatchInStore({type:"REGISTER", payload: userIsEmpty ? null : currentUser});

            setValidated(getState().userState.currentUser != null);
            failed = validated;
        });
    };

    return (
        <>{ validated ? <Redirect to="/home" /> :
            <Form validated={validated ? 1 : 0} onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                <div className="logoarea pt-5 pb-5 row" >
                    <Link to="/login"><img src={light} height={"48px"} width={"48px"} alt="Logo" /></Link><div style={{ color: "#202430", fontSize: "30px", fontWeight: "bold" }}>Clipper</div>
                </div>
                <br></br>
                <h3 id = 'commonColor'>Sign In</h3><br />

                <div className="form-group" >
                    <label id = 'commonColor'>Username</label>
                    <input type="text" required className="form-control" placeholder="Enter username" name="username" />
                </div>

                <div className="form-group">
                    <label id = 'commonColor'>Password</label>
                    <FormControl type="password" required className="form-control" placeholder="Enter password" name="password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" id = 'commonBackground'>Submit</button>
                <p className="forgot-password text-right" id = 'commonColor'>
                    <span>Forgot  <Link to="/reset-password">password? </Link></span>
                    Need an <Link to="/signup">account?</Link><br />{failed ? <span>Invalid user credentials!</span> : <></>}
                </p>
            </Form>
        }
        </>
    );
}

// const mapStateToProps = (state: any) => {
//     return { users: state.users };
// }

// const mapDispatchToProps = {
//     login
// }
// export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);