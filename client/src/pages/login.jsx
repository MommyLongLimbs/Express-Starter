import React, { useEffect, useContext, useState } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import { TextField, Button, Typography, Grid } from '@mui/material'
import '../assets/CSS/css.css'
import AuthContext from '../context/auth/authContext';
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert';


function Login() {
    //? gets size of window
    const size = useWindowSize()
    //? setup navigation
    const nav = useNavigate();


    //? auth context
    const authContext = useContext(AuthContext);
    const { login, isAuthenticated, msg } = authContext



    //? state
    const [formData, setFormData] = useState({});
    const [submit, setSubmit] = useState(false);


    //? on change functions
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //? useEffect for logging
    useEffect(() => {
        // console.log(msg)
    })


    //? check if error is true, set submit to false
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSubmit(false)
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [msg])


    //? check authentication to redirect
    useEffect(() => {
        // isAuthenticated
        //     && nav('/home')
    })


    //? on submit function
    const onSubmit = e => {
        e.preventDefault();
        setSubmit(true)
        login(formData)
    }



    return (
        <div style={{ textAlign: 'center', width: size.width }}>
            <div className='login-box'>


                <Typography className='login-title black-font'>
                    Login Form
                </Typography>

                <br />

                <p className='black-font' style={{ float: 'left', fontSize: '12px' }}>
                    Enter your username and password
                </p>



                {/* //? username */}
                {/* //? username */}
                {/* //? username */}
                <form onSubmit={onSubmit}>
                    <div className='margin5'>
                        <TextField
                            name='username'
                            onChange={onChange}
                            label="Username"
                            variant="outlined" />
                    </div>
                    {/* //? username */}
                    {/* //? username */}
                    {/* //? username */}





                    {/* //? password */}
                    {/* //? password */}
                    {/* //? password */}
                    <div>
                        <TextField
                            name='password'
                            onChange={onChange}
                            label="Password"
                            variant="outlined"
                            type='password' />
                    </div>
                    {/* //? password */}
                    {/* //? password */}
                    {/* //? password */}




                    {/* //? submit btn */}
                    {/* //? submit btn */}
                    {/* //? submit btn */}
                    <div className='margin5'>
                        <Button
                            type='submit'
                            variant="outlined"
                            onSubmit={onSubmit}
                        >
                            Login
                        </Button>
                    </div>
                    {/* //? submit btn */}
                    {/* //? submit btn */}
                    {/* //? submit btn */}



                    <Grid item md={12}>
                        {/* //? validation msgs // */}
                        {/* //? validation msgs // */}
                        {/* //? validation msgs // */}
                        {(submit && !msg?.error) && (
                            <Alert text={msg?.msg} type={'success'} onOpen={true} submit={true} />
                        )}
                        {(submit && msg?.error) && (
                            <Alert text={msg?.msg} type={'error'} onOpen={true} submit={true} />
                        )}
                        {/* //? validation msgs // */}
                        {/* //? validation msgs // */}
                        {/* //? validation msgs // */}
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default Login;