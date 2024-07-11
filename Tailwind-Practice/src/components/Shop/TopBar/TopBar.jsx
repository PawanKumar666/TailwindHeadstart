import SearchBar from "./SearchBar"
import TopRight from "./TopRight"

export default function TopBar(){
    return(
        <>
        <div className='flex justify-between py-4 bg-white border-b border-gray'>
            <div className='flex justify-left'>
                <h1 className='text-2xl pr-1 ml-4'>Payouts</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p className='text-sm text-gray-500 p-1'>How it works</p>
            </div>
            <SearchBar />
            <TopRight />
        </div>
        </>
    )
}