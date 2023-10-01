import sneakersService from "../services/SneakersServices";

export default function SneakersList() {
    // const [sneakers, setSneakers] = useState<SneakersModel[]>([]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sneakers List</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {/* {sneakers.map((sneaker) => ( */}
                    {/* // <SneakersCard sneaker={sneaker} /> */}
                    <button onClick={() => {
                        sneakersService.getAllSneakers().then(res => {
                            console.log(res.data)
                        })
                    }
                    } >

                        Click me
                    </button>


                    {/* ))} */}
                </div>
            </div>

        </div>
    )
}
