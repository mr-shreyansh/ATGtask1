import React, { useEffect, useState } from 'react';
import home from '../assets/home.svg';
import backarrow from '../assets/backarrow.png';
import location from '../assets/location.png';
import info from '../assets/info.png';
import down from '../assets/down.png';
import meet from '../assets/meet.png';
import leisure from '../assets/leisure.png';
import activism from '../assets/activism.png';
import mba from '../assets/mba.png';
import philosophy from '../assets/philosophy.png';
import thumb from '../assets/thumb.png';
import Card from '../components/Card';

const Home = () => {
    const [activeItem, setActiveItem] = useState('All posts(32)');
    const items = ['All posts(32)', 'Article', 'Education', 'Event', 'Job'];
    const posts = [
        {
            id: 1,
            type: 'Article',
            title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            content: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            name: 'Sarthak Kamra',
            date: '',
            location: '',
            companey: '',
            views: '1.4k views',
            image: 'home2',
            button: '',
        },
        {
            id: 2,
            type: 'Education',
            title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            content: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            name: 'Sarah West',
            date: '',
            location: '',
            companey: '',
            views: '1.4k views',
            image: 'home3',
            button: '',
        },
        {
            id: 3,
            type: 'Meetup',
            title: 'Finance & Investment Elite Social Mixer @Lujiazui',
            name: 'Ronal Jones',
            date: 'Fri, 12 Oct, 2018',
            location: 'Ahmedabad, India',
            companey: '',
            views: '1.4k views',
            image: 'home4',
            button: 'Visit Website',
        },
        {
            id: 4,
            type: 'Job',
            title: 'Software Developer',
            name: 'Joseph Gray',
            date: '',
            location: 'Noida, India',
            companey: 'Innovaccer Analytics Private Ltd.',
            views: '1.4k views',
            image: '',
            button: 'Apply on Timesjobs',
        }

    ]

    function clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }
    function rerender() {
        window.location.reload();
    }


    return (
        <div >
            <div className='relative w-full'>
                <img src={home} alt="home" className='w-full h-[60vh] object-cover' />
                <div className='absolute text-white bottom-[7vh] left-[10vw]'>
                    <h1 className='text-lg font-bold md:text-3xl'>Computer Engineering</h1>
                    <p className='text-sm font-light md:text-md'>142,765 Computer Engineers follow this</p>
                </div>
                <ul className='absolute flex justify-between w-full px-5 md:hidden top-5'>
                    <img className='w-6 h-6' src={backarrow} />
                    {
                        localStorage.getItem('name') ? <button onClick={clearLocalStorage} className='flex items-center h-10 gap-2 px-2 text-gray-400 border rounded-md'>Leave Group</button>
                            : <button onClick={Card} className='px-2 py-1 text-lg text-white border rounded-md'>Join Group</button>
                    }

                </ul>
            </div>
            <div className='flex justify-center w-full'>

                {/* list items  */}
                <div className='flex flex-col items-center'>
                    <div className='w-[75vw] hidden md:flex flex-col'>

                        <div className='flex justify-between w-full'>
                            <ul className="flex items-center m-4">
                                {items.map((item) => (
                                    <button
                                        key={item}
                                        className="mx-[2vw] text-gray-700 focus:text-black focus:font-medium cursor-pointer focus:bg-red focus:underline-offset-[21px] focus:underline"
                                        onClick={() => setActiveItem(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </ul>
                            <ul className='flex items-center gap-3'>
                                <button className='flex items-center h-10 gap-2 px-2 rounded-md bg-stone-200'>Write a Post<span><img src={down}></img></span></button>
                                {
                                    localStorage.getItem('name') ? <button onClick={clearLocalStorage} className='flex items-center h-10 gap-2 px-2 text-gray-400 border rounded-md'>Leave Group</button>
                                        : <button onClick={rerender} className='flex items-center h-10 gap-2 px-2 text-white bg-blue-600 rounded-md'><span><img src={meet} /></span>Join Group</button>


                                }
                            </ul>
                        </div>
                        <hr className="w-full border-t border-gray-300 " />
                    </div>
                    <div className='flex justify-between w-full px-5 pt-5 md:hidden'>
                        <div className='text-lg font-medium'>
                            Posts(368)
                        </div>
                        <div>
                            <button className='flex items-center px-3 py-1 font-medium bg-gray-200 rounded-sm'>Filter:All<img className='pe-1 ps-3' src={down}></img></button>
                        </div>
                    </div>
                    {/* posts */}
                    <div className='flex justify-between w-full mt-7'>

                        <div className='flex flex-col items-start gap-7'>
                            {posts.map((post) => (
                                <Card
                                    key={post.id}
                                    id={post.id}
                                    type={post.type}
                                    title={post.title}
                                    content={post.content}
                                    name={post.name}
                                    date={post.date}
                                    location={post.location}
                                    companey={post.companey}
                                    views={post.views}
                                    button={post.button}
                                    image={post.image}
                                />
                            ))}
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-center gap-1 pt-9'><img className='w-4 h-4' src={location} /><span className='font-medium'>Noida,India</span></div>
                            <div className='flex items-start gap-1 pt-5 text-sm text-gray-500'>
                                <img src={info} className='w-4 h-4 mt-1 opacity-60' />
                                <div>Your location will help us serve better <br></br> and extend a personalised experience.</div>
                            </div>
                            <div>
                                {/* that section here  */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home