import Head from 'next/head'
import Image from 'next/image'
import typewritter from '../Images/typewritter.jpg'
import {Cutive_Mono} from "next/font/google"
import { useState } from 'react'
import { useRouter } from 'next/router'

const CutiveMono = Cutive_Mono({weight:'400',subsets:['latin']})

export default function Home() {

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    author: '',
    description: '',
  });
  const router=useRouter()
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json',},
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      router.push('/page2');
     
      
    } catch (error) {
      console.error(error);
    }
   
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

 

  return (
    <>
      <div>
        <Head >
          <title>MinervaPesu</title>
        </Head>


      
      <div className=' justify-center'>
        <Image src={typewritter} fill/>
        <form action="/" method="POST" className='relative m-10 pl-10 pt-10' >
          <div className={CutiveMono.className}>
            <input type="text"  name="title" value={formData.title} onChange={handleChange} className='placeholder-red-700 border-b outline-none  peer rounded-r-md border-red-600 text-red-700 font-bold m-5 bg-inherit ' />
            <label  className='font-semibold text-red-700  text-l left-16 pt-0 absolute cursor-text peer-focus:text-xs ' >Title  </label>
          </div>
          <div className={CutiveMono.className}>
            <input type="text"  name="genre"  value={formData.genre} onChange={handleChange}className='placeholder-red-700 border-b outline-none rounded-r-md peer border-red-600 text-red-700 font-bold m-5 bg-inherit  '/>
            <label className='font-semibold text-red-700 text-l left-16 pt-0 absolute cursor-text peer-focus:text-xs'>Genre</label>
          </div>
          <div className={CutiveMono.className}>
            <input type="text"  name="author"  value={formData.author} onChange={handleChange}  className='placeholder-red-700 border-b   outline-none border-red-600 peer rounded-r-md text-red-700 font-bold m-5 bg-inherit '/>
            <label className='font-semibold text-red-700 text-l left-16 pt-0 absolute cursor-text peer-focus:text-xs'>Author</label>
          </div>
          <div className={CutiveMono.className}>
            <input type="text"  name="description"  value={formData.description} onChange={handleChange} className=' placeholder-red-700 border-b border-red-600 outline-none rounded-r-md peer text-red-700 font-bold m-4 pb-20 bg-inherit  h-32 ' size={100}/>
            <label className='font-semibold text-red-700 text-l left-16 pt-0 absolute cursor-text peer-focus:text-xs' >Content of the Article</label>
          </div>  
          <div className={CutiveMono.className}>  
            <button onClick={handleSubmit}  className=' placeholder-red-700 outline rounded-md text-red-700 font-bold my-20 mx-96 px-28 bg-inherit '>submit</button>
          </div> 
        </form>
        
      </div>
    </div>
    </>)
}
