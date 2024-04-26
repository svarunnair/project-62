import axios from "axios"

export const GET_AUTH_REQUEST="GET_AUTH_REQUEST"
export const GET_AUTH_SUCCESS="GET_AUTH_SUCCESS"
export const GET_AUTH_FAILURE="GET_AUTH_SUCCESS"

export const POST_AUTH_REQUEST="POST_AUTH_REQUEST"
export const POST_AUTH_SUCCESS="POST_AUTH_SUCCESS"
export const POST_AUTH_FAILURE="POST_AUTH_SUCCESS"

export const POST_SIGNUP_REQUEST="POST_SIGNUP_REQUEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_SUCCESS"


const getAuthRequest=()=>{
    return({
        type:GET_AUTH_REQUEST
    })
}
const getAuthSuccess=(data)=>{
    return({
        type:GET_AUTH_SUCCESS,
        payload:data
    })
}
const getAuthFailure=()=>{
    return({
        type:GET_AUTH_FAILURE
    })
}

const postSignupRequest=()=>{
    return({
        type:POST_SIGNUP_REQUEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
    })
}

const postAuthRequest=()=>{
    return({
        type:POST_AUTH_REQUEST
    })
}
const postAuthSuccess=(data)=>{
    return({
        type:POST_AUTH_SUCCESS,
        payload:data
    })
}
const postAuthFailure=()=>{
    return({
        type:POST_AUTH_FAILURE
    })
}


export const getAuth=()=>(dispatch)=>{
    dispatch(getAuthRequest())
    return axios({
        url:"http://localhost:1200/user",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getAuthSuccess(res.data))
        console.log("res.data.",res.data)
    })
    .catch((err)=>{
        dispatch(getAuthFailure(err))
    })
}

export const postSignup=()=>(dispatch)=>{
    dispatch(postSignupRequest())
    return axios({
        url:"http://localhost:1200/user",
        method:"GET"
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("res.data.",res.data)
    })
    .catch((err)=>{
        dispatch(postSignupFailure(err))
    })
}

export const postAuth=(data)=>(dispatch)=>{
    dispatch(postAuthRequest())
    return axios({
        url:"http://localhost:1200/user/login",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAuthSuccess(res.data))
        console.log("res.data.post",res.data)
    })
    .catch((err)=>{
        dispatch(postAuthFailure(err))
    })
}