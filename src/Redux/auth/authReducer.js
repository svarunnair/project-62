import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, POST_AUTH_FAILURE, POST_AUTH_REQUEST, POST_AUTH_SUCCESS } from "./authAction"

const initState={
    isLoading:false,
    isError:false,
    getAuth:[],
    postAuth:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_AUTH_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_AUTH_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getAuth:action.payload
                })
                case GET_AUTH_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })


                    case POST_AUTH_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_AUTH_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    postAuth:action.payload
                })
                case POST_AUTH_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })



                    default:
                        return({
                            ...state
                        })
    }
}