import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HistoryCard from '../components/HistoryCard'
import { getAllUserHistory } from '../redux/History/History.action'

function HistoryPage() {
    const dispatch = useDispatch()
    const histories = useSelector((state) => state.history.userHistory)
    // console.log(histories)
    useEffect(()=>{
        dispatch(getAllUserHistory())
    },[])
  return (
    <div className='ml-56 py-3'>
        <h1 className='font-semibold text-xl py-2'>History</h1>
        {histories.length === 0 && <p className='text-center font-semibold text-gray-500'>History is Empty</p>}
        <div className=''>
            {histories.map((history) =>(
                <HistoryCard code={history.card.code} title={history.card.title} id={history.card._id} createdAt={history.createdAt}/>
            ))}
        </div>
    </div>
  )
}

export default HistoryPage