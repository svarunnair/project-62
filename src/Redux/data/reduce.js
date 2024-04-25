import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_PATCH_FAILURE, GET_PATCH_REQUEST, GET_PATCH_SUCCESS, PATCH_DATA_FAILURE, PATCH_DATA_REQUEST, PATCH_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, postData } from "./action"

const initState={
    isLoading:false,
    isError:false,
    postData:[],
    dataGet:[],
    dataPatch:[],
    deleteData:[]
}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postData:action.payload
                })
                case POST_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case GET_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    dataGet:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                     case PATCH_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case PATCH_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    dataPatch:action.payload
                })
                case PATCH_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case DELETE_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case DELETE_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    deleteData:action.payload
                })
                case DELETE_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


       




                    default:
                        return({
                            ...state
                        })
    }
}