import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBucket } from '../redux/Bucket/Bucket.action'
import AddBucketModal from './AddBucketModal'
import MyBucketCard from './MyBucketCard'
function MyBuckets() {
  const [open,setOpen] = useState(false)
  const buckets = useSelector((state) => state.bucket.userBucket)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserBucket())
  },[dispatch])
  return (
    <>
      <AddBucketModal open={open} setOpen={setOpen}/>
      <div className='ml-52 my-4 mx-3'>
          <div className='flex justify-end py-3'>
              <button onClick={()=> setOpen(true)} className='flex gap-1 items-center justify-center p-2 bg-slate-700 text-white rounded'>
              <svg stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"  color="white"><path fill="none" stroke="#fff" stroke-width="2" d="M12,18 L12,6 M6,12 L18,12"></path></svg>
                  <span className='font-semibold'>Add New Bucket</span>
              </button>
          </div>
            {buckets.length === 0 && <p className='text-center  py-5 text-gray-500 font-semibold'>No Buckets Found</p>}
            {buckets.length > 0 && 
            <div className='px-4 grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
              {buckets.map((bucket) => (
                <MyBucketCard img={bucket.img} title={bucket.title} id={bucket._id}/>
              ))}
            </div>}
      </div>
    </>
  )
}

export default MyBuckets