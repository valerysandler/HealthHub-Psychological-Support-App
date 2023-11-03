import CategoryList from "./CategoryList"
import DoctorCard from "./DoctorCard"
import SearchBar from "./SearchBar"

const people = [
    {
        key: 1,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Endocrinologist',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        price: '$120',
    },
    {
        key: 2,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Neurosurgeon',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        price: '$120',
    },
    {
        key: 3,
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Family doctor',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        price: '$120',
    },
    {
        key: 4,
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Neuropathologist',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        price: '$120',
    },
    {
        key: 5,
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Gastroenterologist',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        price: '$120',
    },
    {
        key: 6,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        price: '$120',
    },
    {
        key: 7,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        price: '$120',
    },
    {
        key: 8,
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        price: '$120',
    },
]

export default function DoctorsList() {
    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-4xl font-bold text-purple-900">Doctors</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                Here you can find the list of all doctors.
            </p>
            <SearchBar />
            <CategoryList />
            {/* Create grid with doctors full width */}
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-6">
                {people.map((person) => (
                    <DoctorCard
                        key={person.key}
                        name={person.name}
                        speciality={person.role}
                        rating={4.5}
                        image={person.imageUrl}
                        onClick={() => { }}
                    />
                ))}
            </div>
        </div>
    )
}