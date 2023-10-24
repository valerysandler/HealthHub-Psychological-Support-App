import svg from '../assets/arrow.svg'
export default function BackArrow() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <img src={svg} alt="arrow" className="w-8 h-8" />
                <p className="text-sm text-gray-500">Back</p>
            </div>
        </>
    )
}