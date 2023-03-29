import React,{useState} from 'react'
import {FiPlay} from 'react-icons/fi'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import VideoModal from './VideoModal'
dayjs.extend(relativeTime)
function HistoryCard({title,code,createdAt}) {
    const [open,setOpen] = useState(false)
  return (
    <div className='flex gap-3 border'>
        <VideoModal open={open} setOpen={setOpen} code={code} title={title}/>
        <div className="w-44 relative cursor-pointer" onClick={() => setOpen(true)}>
            <img src={`https://img.youtube.com/vi/${code}/hqdefault.jpg`} alt={title} />
            <span className='absolute bg-slate-500 text-3xl text-white rounded-full p-2 opacity-60' style={{right:'35%',top:'30%'}}><FiPlay /></span>
        </div>
        <div>
            <h2 className='font-semibold text-xl'>{title}</h2>
            <p className='text-gray-500'><span className='text-black'>Viewed:</span> {dayjs().to(dayjs(createdAt))}</p>
        </div>
    </div>
  )
}

export default HistoryCard