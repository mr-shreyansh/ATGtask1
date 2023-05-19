import React from 'react'
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.jpg';
import article from '../assets/Article.svg';
import education from '../assets/Education.svg';
import job from '../assets/Job.svg';
import meetup from '../assets/Meetup.svg';
import sarthak from '../assets/sarthak.png';
import sara from '../assets/sara.png';
import ronal from '../assets/ronal.png';
import joseph from '../assets/joseph.png';
import via from '../assets/via.png';


const Card = ({
    id,
    type,
    title,
    name,
    content,
    date,
    location,
    companey,
    views,
    button,
    image }) => {
        const images = [home2,home3,home4];
        const icons = [article,education,job,meetup];
        const names = [sarthak,sara,ronal,joseph];
  return (
    <div className='w-full md:w-[40vw] border rounded-md'>
            {images[id-1] && <img src={images[id-1]} alt="home1" className=' min-h-[200px] h-36 w-full object-cover' />}
            <div className='p-4'>
                <img src={icons[id-1]} alt="home1" className='w-16 h-12' />
                <h1 className='text-xl font-semibold'>{title}</h1>
                <div className='flex gap-12 py-2'>
                {
                   content && <p className='py-2 text-gray-500'>{content}</p> 
                }
                {
                    companey && <span className='font-medium'>{companey}</span>
                }
                {
                    date && <span className='font-medium'>{date}</span> 
                }
                {
                    location && <span className='font-medium'>{location}</span>
                }
                </div>
                {
                    button && <button className='w-full py-2 my-3 text-center text-red-500 border rounded-lg'>{button}</button>
                }
                <div className='flex flex-col md:justify-between md:items-center md:flex-row'>
                    <div className='flex items-center gap-2 font-medium'><img src={names[id-1]}/>{name}</div>
                    <div className='flex items-center gap-8 px-3'>
                        {views}
                        <div className='p-2 bg-gray-200 rounded-sm'>
                            <img src={via}/>
                        </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Card