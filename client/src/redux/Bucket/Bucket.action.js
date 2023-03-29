import axios from 'axios'
import { bucketFail, bucketRequest, bucketSuccess,bucketAddSuccess, bucketGetUserSuccess, bucketGetByIdSuccess, bucketDeleteSuccess } from './Bucket.reducer'

export const createBucket = (bucket)=> async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const bucketData = await axios({
            method:"POST",
            url:"http://localhost:4000/bucket/create",
            data: bucket
        })
        return dispatch(bucketAddSuccess(bucketData.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getAllBucket = ()=> async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const bucketData = await axios({
            method:"GET",
            url:"http://localhost:4000/bucket",
        })
        return dispatch(bucketSuccess(bucketData.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getUserBucket = () => async(dispatch) =>{
    try {
        dispatch(bucketRequest())
        const userBucket = await axios({
            method:"GET",
            url:"http://localhost:4000/bucket/user"
        })
        dispatch(bucketGetUserSuccess(userBucket.data))
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
export const getBucketById = (id) => async(dispatch) =>{
    try {
        const bucketData = await axios({
            method:"GET",
            url:`http://localhost:4000/bucket/user/${id}`
        })
        dispatch(bucketGetByIdSuccess(bucketData.data));
    } catch (error) {
        return dispatch(bucketFail(error.response.data.message));
    }
}
