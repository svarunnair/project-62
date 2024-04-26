import axios from "axios"


export const POST_DATA_REQUEST="POST_DATA_REQUEST"
export const POST_DATA_SUCCESS="POST_DATA_SUCCESS"
export const POST_DATA_FAILURE="POST_DATA_FAILURE"

export const GET_DATA_REQUEST="GET_DATA_REQUEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const PATCH_DATA_REQUEST="PATCH_DATA_REQUEST"
export const PATCH_DATA_SUCCESS="PATCH_DATA_SUCCESS"
export const PATCH_DATA_FAILURE="PATCH_DATA_FAILURE"

export const DELETE_DATA_REQUEST="DELETE_DATA_REQUEST"
export const DELETE_DATA_SUCCESS="DELETE_DATA_SUCCESS"
export const DELETE_DATA_FAILURE="DELETE_DATA_FAILURE"





const postDataRequiest=()=>{
    return({
        type:POST_DATA_REQUEST
    })
}
const postDataSuccess=(data)=>{
    return({
        type:POST_DATA_SUCCESS,
        payload:data
    })
}
const postDataFailure=()=>{
    return({
        type:POST_DATA_FAILURE
    })
}



const getDataRequest=()=>{
    return({
        type:GET_DATA_REQUEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const patchDataRequest=()=>{
    return({
        type:PATCH_DATA_REQUEST
    })
}
const patchDataSuccess=(data)=>{
    return({
        type:PATCH_DATA_SUCCESS,
        payload:data
    })
}
const patchDataFailure=()=>{
    return({
        type:PATCH_DATA_FAILURE
    })
}

const deleteDataRequest=()=>{
    return({
        type:DELETE_DATA_REQUEST
    })
}
const deleteDataSuccess=(data)=>{
    return({
        type:DELETE_DATA_SUCCESS,
        payload:data
    })
}
const deleteDataFailure=()=>{
    return({
        type:DELETE_DATA_FAILURE
    })
}

export const patchData=(id,data)=>(dispatch)=>{
    dispatch(patchDataRequest())
    return axios({
        url:`https://backentapi61.onrender.com/data/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchDataSuccess(res.data))
        console.log("res.dataa",res.data)
    })
    .catch((err)=>{
        dispatch(patchDataFailure(err))
    })
}



export const postData=(data)=>(dispatch)=>{
    dispatch(postDataRequiest())
    return axios({
        url:"https://backentapi61.onrender.com/data",
        method:"POST",
        data
       
    })
    .then((res)=>{
        dispatch(postDataSuccess(res.data))
        console.log("res.dataaaa",res.data)
    })
    .catch((err)=>{
        dispatch(postDataFailure(err))
    })
}



export const getData=()=>(dispatch)=>{
    dispatch(getDataRequest())
    return axios({
        url:"https://backentapi61.onrender.com/data",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("res.dataaaa",res.data)
    })
    .catch((err)=>{
        dispatch(getDataFailure(err))
    })
}


export const deleteData=(id)=>(dispatch)=>{
    dispatch(deleteDataRequest())
    return axios({
        url:`https://backentapi61.onrender.com/data/${id}`,
        method:"DELETE",
    })
    .then((res)=>{
        dispatch(deleteDataSuccess(res.data))
        console.log("res.dataa",res.data)
    })
    .catch((err)=>{
        dispatch(deleteDataFailure(err))
    })
}