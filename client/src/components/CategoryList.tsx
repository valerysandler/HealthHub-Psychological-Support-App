import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    {
        id: 1,
        name: "Psychiatrist",
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYnJpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id: 2,
        name: "Psychologist",
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYnJpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id: 3,
        name: "Therapist",
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYnJpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id: 4,
        name: "Counsellor",
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYnJpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        id: 5,
        name: "Life Coach",
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHN5Y2hpYnJpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
]

function CategoryList() {
    return (
        //    Create a category list section here 
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Choose you`re Doctor</h1>
                <div className="flex flex-wrap -m-4">
                    {categories.map((category) => (
                        <Link to={`/categories/${category.id}`} key={category.id}>
                            <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoryList