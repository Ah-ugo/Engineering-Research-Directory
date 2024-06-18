import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard'
import NavBarComp from '../Components/NavbarComp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FooterComponent from '../Components/FooterComponent'
// import "./Header.css";

export default function DirectoryIndex() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const navigation = useNavigate()

    const GetBooks = async() => {
        await axios.get("https://parseapi.back4app.com/classes/Books", {
            headers:{
                "X-Parse-Application-Id": "qi7EPlNyxhbkLy4Df91l5PtUgIQvviwT9eAgupbX",
          "X-Parse-REST-API-Key": "qCqCI6WnR6oB2Wq7w24IXnblkOby2JRQb4Q9TZww",
          "Content-Type": "application/json",
            }
        }).then(res=>{
            console.log(res)
            setBooks(res.data?.results)
        })
    }
    const BookClick = () => {
        navigation("/details")
    }

    const filteredData = books.filter(
        ({ title, author, faculty, price }) =>
          title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          price.toLowerCase().includes(searchTerm.toLowerCase())
      );

    useEffect(()=>{
        GetBooks()
    },[])
  return (
    <div>
        <div className='holder'>
            {/* <p>rdjk</p> */}
        <header className='header'>
            <NavBarComp />
            <div className='header-content flex flex-c text-center text-white justify-center items-center text-center pt-20 pb-10'>
                <h2 className='header-title text-capitalize text-2xl sm:text-4xl mb-2 font-bold'>Find Your Book Of Choice.</h2><br />
                <p className='header-text fs-18 fw-3 text-md font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                {/* <SearchForm /> */}
<main className='w-full px-4 flex justify-center items-center sticky top-20 z-50'>
                <div class="flex px-4 py-3 rounded-md border-2 bg-white overflow-hidden w-full font-[sans-serif] max-w-[680px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          class="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="text" placeholder="Search Something..." class="w-full outline-none bg-transparent text-gray-600 text-sm" onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
      </main>
            </div>
        </header>
    </div>
        <section class="pb-10 pt-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope font-bold text-3xl sm:text-4xl text-black mb-8 max-lg:text-center">
        Directories Ebooks
        </h2>
        <div class="grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        {filteredData.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        })}
            
            {/* </div> */}
        </div>
    </div>
</section>
<FooterComponent/>
    </div>
  )
}
