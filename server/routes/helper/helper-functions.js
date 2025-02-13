//~====================================
//&            Requirements
//~====================================
const express = require('express');
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
const mongoose = require('mongoose');



//~====================================
//&            Configuration
//~====================================
dotenv.config({
    path: "./config/config.env",
});



//~====================================
//&            Functions
//~====================================
//? verify token 
const verifyToken = (req) => {

    let refreshUser = '';
    let accessUser = '';

    // console.log(req.cookies.refreshToken)

    try {
        //? verify refresh token
        const refreshToken = jwt.verify(req.cookies.refreshToken, process.env.JWTSECRET);
        refreshUser = refreshToken.user;
    } catch (error) {
        console.log(error);
    }

    try {
        //? verify access token
        // const getAuthHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfcGVybWlzc2lvbnMiOnsiY2FuX3ZpZXdfdXNlcnMiOnRydWUsImNhbl9hZGRfdXNlciI6dHJ1ZSwiY2FuX2VkaXRfdXNlciI6dHJ1ZSwiY2FuX2RlbGV0ZV91c2VyIjp0cnVlfSwiaW5zdGl0dXRlX3Blcm1pc3Npb25zIjp7ImNhbl92aWV3X2luc3RpdHV0ZSI6dHJ1ZSwiY2FuX2FkZF9pbnN0aXR1dGUiOnRydWUsImNhbl9lZGl0X2luc3RpdHV0ZSI6dHJ1ZSwiY2FuX2RlbGV0ZV9pbnN0aXR1dGUiOnRydWV9LCJwcm9kdWN0c19wZXJtaXNzaW9ucyI6eyJjYW5fYWRkX3Byb2R1Y3QiOnRydWUsImNhbl92aWV3X3Byb2R1Y3RzIjp0cnVlLCJjYW5fZWRpdF9wcm9kdWN0Ijp0cnVlLCJjYW5fZGVsZXRlX3Byb2R1Y3QiOnRydWUsImNhbl9icm93c2VfcHJvZHVjdHMiOnRydWV9LCJzYWxlc19wZXJtaXNzaW9ucyI6eyJjYW5fdmlld19zYWxlcyI6dHJ1ZSwiY2FuX2VkaXRfc2FsZSI6dHJ1ZSwiY2FuX2RlbGV0ZV9zYWxlIjp0cnVlfSwicGF5bWVudHNfcGVybWlzc2lvbnMiOnsiY2FuX2FkZF9wYXltZW50cyI6dHJ1ZSwiY2FuX3ZpZXdfcGF5bWVudHMiOnRydWUsImNhbl9lZGl0X3BheW1lbnQiOnRydWUsImNhbl9kZWxldGVfcGF5bWVudCI6dHJ1ZSwiY2FuX3ZpZXdfbGlzdF9vZl9wZW5kaW5nX3BheW1lbnRzIjp0cnVlLCJjYW5fY29uZmlybV9wYXltZW50Ijp0cnVlfSwicHVyY2hhc2VzX3Blcm1pc3Npb25zIjp7ImNhbl9hZGRfcHVyY2hhc2VzIjp0cnVlLCJjYW5fdmlld19wdXJjaGFzZXMiOnRydWUsImNhbl9lZGl0X3B1cmNoYXNlIjp0cnVlLCJjYW5fZGVsZXRlX3B1cmNoYXNlIjp0cnVlLCJjYW5fc2VuZF9wdXJjaGFzZV9yZXF1ZXN0Ijp0cnVlfSwiY29kZV9wZXJtaXNzaW9ucyI6eyJjYW5fdmlld19jb2RlcyI6dHJ1ZSwiY2FuX2VkaXRfY29kZSI6dHJ1ZSwiY2FuX2RlbGV0ZV9jb2RlIjp0cnVlLCJjYW5fcmVkZWVtX2NvZGVzIjp0cnVlLCJjYW5fZm9yd2FyZF9jb2RlcyI6dHJ1ZX0sIl9pZCI6IjY1YjhiZDA4MTc3NTZkZTdmMjhhOTdlOSIsImZ1bGxOYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQG91dGxvb2suY29tIiwicGFzc3dvcmQiOiJhZG1pbjEyMyIsInR5cGUiOiJzdXBlckFkbWluIiwiaXNfbWFpbl9hZG1pbiI6dHJ1ZSwiaXNBcmNoaXZlZCI6ZmFsc2UsImFkZHJlc3MiOiJDb3JuaWNoZSBBbCBNYXpyYWEiLCJjb3VudHJ5IjoiTGViYW5vbiIsInByb2R1Y3RzIjpbXX0sImlhdCI6MTcxOTkwNDcxNiwiZXhwIjoxNzIyNDk2NzE2fQ.CkvB_XETl8LdpdIHiTP_0I1X9dC6f2BOZtAI_TBNOF0'

        const getAuthHeader = req.headers['authorization'];

        if (!getAuthHeader) {
            throw new Error('Authorization header missing');
        }

        const authHeaderParts = getAuthHeader.split(' ');
        if (authHeaderParts[0] !== 'Bearer' || !authHeaderParts[1]) {
            throw new Error('Invalid authorization header format');
        }

        const accessToken = jwt.verify(authHeaderParts[1], process.env.JWTSECRET);
        accessUser = accessToken.user;
    } catch (error) {
        console.log(error);
    }

    //? compare ID
    if (accessUser?._id === refreshUser?._id) {
        return accessUser;
    } else {
        return false;
    }
};



module.exports = {
    verifyToken
}