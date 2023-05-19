import logo from '../assets/logo.png'
import triangle from '../assets/triangle.png';
import circle from '../assets/circle.png';
import rectangle from '../assets/rectangle.png';
const Navbar = () => {
  function rerender () {
    window.location.reload();
}
  return (
    <nav className='w-full bg-white '>
      <ul className='items-center justify-between hidden w-full py-3 md:flex px-7'>
        <li><a href="/"><img src={logo} /></a></li>
        <li className='relative'><span><svg className="absolute z-10 w-4 cursor-pointer svg-icon search-icon top-2 left-4" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg></span>
          <input type='text' placeholder='Search for your favourite groups in ATG' className=' bg-stone-100 text-center py-1 rounded-2xl min-w-[380px]' /></li>
           {
          localStorage.getItem("name") ?
          <li className='flex items-center gap-3'>
          <img src={localStorage.getItem("profilePic")} alt="profile pic" className='w-10 h-10 rounded-full'/>
          <h1>{localStorage.getItem("name")}</h1>
        </li> 
             : <a onClick={rerender} className='cursor-pointer'>Create account.<a className='text-blue-500 cursor-pointer'>Its free!</a></a> 

           }
        
      </ul>
      <ul className=' md:hidden'>
        <li className='flex justify-end gap-1 px-3 py-1'>
          <img src={rectangle} />
          <img src={circle} />
          <img src={triangle} />
        </li>
      </ul>

    </nav>)
}

export default Navbar