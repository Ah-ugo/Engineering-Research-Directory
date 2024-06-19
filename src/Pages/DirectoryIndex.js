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
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState("All")
    const [bookCat, setBookCat] = useState([])
    const [materialCat, setMaterialCat] = useState([])
    const [researchCat, setResearchCat] = useState([])
    const [thesesCat, setThesesCat] = useState([])
    const [journalCat, setJournalCat] = useState([])
    const navigation = useNavigate()

    const GetBooks = async() => {
        setLoading(true)
        await axios.get("https://parseapi.back4app.com/classes/Books", {
            headers:{
                "X-Parse-Application-Id": "qi7EPlNyxhbkLy4Df91l5PtUgIQvviwT9eAgupbX",
          "X-Parse-REST-API-Key": "qCqCI6WnR6oB2Wq7w24IXnblkOby2JRQb4Q9TZww",
          "Content-Type": "application/json",
            }
        }).then(res=>{
            console.log(res)
            setBooks(res.data?.results)
            setLoading(false)
        }).catch(e=>{
            console.log(e)
            setLoading(false)
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
        // setJournalCat(filteredData.filter(item=>item?.ResourceType === "Academic Journals"))
        // setThesesCat(filteredData.filter(item=>item?.ResourceType === "Theses and Dissertations"))
        // setResearchCat(filteredData.filter(item=>item?.ResourceType === "Research Papers"))
        // setMaterialCat(filteredData.filter(item=>item?.ResourceType === "Course Materials"))
        // setBookCat(filteredData.filter(item=>item?.ResourceType === "Books"))
    },[])

    useEffect(() => {
        setJournalCat(filteredData.filter(item => item?.ResourceType === "Academic Journals"));
        setThesesCat(filteredData.filter(item => item?.ResourceType === "Theses and Dissertations"));
        setResearchCat(filteredData.filter(item => item?.ResourceType === "Research Papers"));
        setMaterialCat(filteredData.filter(item => item?.ResourceType === "Course Materials"));
        setBookCat(filteredData.filter(item => item?.ResourceType === "Books"));
      }, [filteredData]);
  return (
    <div>
        <div className='holder'>
            {/* {alert(bookCat)} */}
            {/* <p>rdjk</p> */}
        <header className='header'>
            <NavBarComp />
            <div className='header-content flex flex-c text-center text-white justify-center items-center text-center pt-20 pb-10 px-2'>
                <h2 className='header-title text-capitalize text-2xl sm:text-4xl mb-2 font-bold flex text-center items-center justify-center'>Welcome to the Repository Of The Faculty Of Engineering<br/> Abia State University</h2><br />
                <p className='header-text fs-18 fw-3 text-md font-normal'>The faculty of Engineering, ABSU Repository is an open access repository that aims to collect, preserve and showcase the research output, Books and educational materials affiliated or owned by the faculty of engineering, Abia State University for faculty members and global audience</p>
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
        {/* Tab bar */}
        <div style={{scrollbarWidth: "none"}} class="flex mb-6 overflow-x-scroll justify-between overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
        <button onClick={()=>{setActiveTab("All")}} class={activeTab === "All"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        All
    </button>
    <button onClick={()=>{setActiveTab("Books")}} class={activeTab === "Books"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        Books
    </button>

    <button onClick={()=>{setActiveTab("Course Materials")}} class={activeTab === "Course Materials"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        Course Materials
    </button>

    <button onClick={()=>{setActiveTab("Research Papers")}} class={activeTab === "Research Papers"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        Research Papers
    </button>

    <button onClick={()=>{setActiveTab("Theses and Dissertations")}} class={activeTab === "Theses and Dissertations"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        Theses and Dissertations
    </button>

    <button onClick={()=>{setActiveTab("Academic Journals")}} class={activeTab === "Academic Journals"?"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none":"inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"}>
        Academic Journals
    </button>
</div>

        {activeTab === "All" && <div class={filteredData.length > 0 && "grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        {!loading ? filteredData.length > 0 ? filteredData.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        }): <div className='flex justify-center items-center'>
        <p>Nothing here</p>
    </div>: <div className='flex justify-center items-center'><div role='status' aria-label='loading'>
        <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9023_61563)'>
          <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
        </g>
        <defs>
          <clipPath id='clip0_9023_61563'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
        </svg>
        <span class='sr-only'>Loading...</span>
        </div></div>}
            
            {/* </div> */}
        </div>}


        {activeTab === "Books" && <div class={bookCat.length > 0 && "grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
            {/* ddj */}
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        {!loading ? bookCat.length > 0 ? bookCat.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        }): <div className='flex justify-center items-center'>
        <p>Nothing here</p>
    </div> : <div className='flex justify-center items-center'><div role='status' aria-label='loading'>
        <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9023_61563)'>
          <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
        </g>
        <defs>
          <clipPath id='clip0_9023_61563'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
        </svg>
        <span class='sr-only'>Loading...</span>
        </div></div>}
            
            {/* </div> */}
        </div>}


        {activeTab === "Course Materials" && <div class={materialCat.length > 0 && "grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        
        {!loading ? materialCat.length > 0 ? materialCat.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        }): <div className='flex justify-center items-center'>
        <p>Nothing here</p>
    </div> : <div className='flex justify-center items-center'><div role='status' aria-label='loading'>
        <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9023_61563)'>
          <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
        </g>
        <defs>
          <clipPath id='clip0_9023_61563'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
        </svg>
        <span class='sr-only'>Loading...</span>
        </div></div>}
            
            {/* </div> */}
        </div>}

        {activeTab === "Research Papers" && <div class={researchCat.length > 0 &&"grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        
        {!loading ? researchCat.length > 0 ? researchCat.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        }): <div className='flex justify-center items-center'>
        <p>Nothing here</p>
    </div> : <div className='flex justify-center items-center'><div role='status' aria-label='loading'>
        <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9023_61563)'>
          <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
        </g>
        <defs>
          <clipPath id='clip0_9023_61563'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
        </svg>
        <span class='sr-only'>Loading...</span>
        </div></div>}
            
            {/* </div> */}
        </div>}

        {activeTab === "Theses and Dissertations" && <div class={journalCat.length > 0 &&"grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
            
        {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
        {!loading ? journalCat.length > 0 ? thesesCat.map(res=>{
            return (
            <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
            )
        }): <div className='flex justify-center items-center'>
            <p>Nothing here</p>
        </div>: <div className='flex justify-center items-center  w-full'><div role='status' aria-label='loading'>
        <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_9023_61563)'>
          <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
        </g>
        <defs>
          <clipPath id='clip0_9023_61563'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
        </svg>
        <span class='sr-only'>Loading...</span>
        </div></div>}    
            {/* </div> */}
        </div>}


        {activeTab === "Academic Journals" && <div class={journalCat.length > 0 && "grid flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center"}>
           
           {/* <div className='flex gap-8 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none"}}> */}
           {!loading ? journalCat.length > 0 ? journalCat.map(res=>{
               return (
               <BookCard title={res?.title} Author={res?.author} image={res?.cover_image?.url} onClick={()=>{const encodedData = encodeURIComponent(JSON.stringify(res)); navigation(`/details/${encodedData}`)}} prevlink={res?.pdfFile?.url}/>
               )
           }):<div className='flex justify-center items-center'>
               <p>Nothing here</p>
           </div>: <div className='flex justify-center items-center'><div role='status' aria-label='loading'>
           <svg class='w-6 h-6 stroke-indigo-600 animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
           <g clip-path='url(#clip0_9023_61563)'>
             <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' stroke-width='1.4' stroke-linecap='round' class='my-path'></path>
           </g>
           <defs>
             <clipPath id='clip0_9023_61563'>
               <rect width='24' height='24' fill='white'></rect>
             </clipPath>
           </defs>
           </svg>
           <span class='sr-only'>Loading...</span>
           </div></div>}
               
               {/* </div> */}
           </div>}
    </div>
</section>
<FooterComponent/>
    </div>
  )
}
