import React from 'react'

export default function BookCard({title, Author, onClick, image, prevlink}) {
  return (
    <div  class="min-w-72 w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href={""} onClick={onClick}>
            <img src={image?image:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    alt="Product" class="h-80 min-w-72 w-full object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Ebook</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{title}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">{Author}</p>
                    {/* <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> */}
                    <div class="ml-auto">
                        <button class="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">Read</button>
                    </div>
                </div>
            </div>
        </a>
    </div>
  )
}
