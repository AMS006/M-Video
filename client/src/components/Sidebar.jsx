import React from 'react'
import { Link, useParams } from 'react-router-dom'
function Sidebar() {
    const params = useParams()
    let tab = params.tab
    let myId = params?.myId
    if(!tab)
        tab = 'home'
    if(myId)
        tab = 'mybuckets'
    console.log(tab)
  return (
    <div className='fixed left-0 bg-slate-100 gap-6 font-semibold h-full px-12 py-4 text-center flex flex-col '>
        <div className={`${tab==='home'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`}>
            <Link to={'/'}>Home</Link>
        </div>
        <div className={`${tab==='mybuckets'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`}>
            <Link to={'/mybuckets'}>My Buckets</Link>
        </div>
        <div className={`${tab==='history'?'bg-slate-700 w-28 text-white rounded-full  py-1':''}`}>
            <Link to={'/history'}>History</Link>
        </div>
    </div>
  )
}

export default Sidebar