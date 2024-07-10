export default function RevenueCard({title, showWarning, amount, numOrders, redirectToOrderLink}) {
    return (
        <div className="bg-white rounded-lg shadow-md w-1/4">
            <div className="flex justify-left p-3 text-gray-500">
                <h1 className="pr-2">{title}</h1>
                {showWarning && 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                }
            </div>
            <div className="flex justify-between p-2">
                <h1 className="pr-2 text-4xl">{amount}</h1>
                <a className="pr-2 text-blue-500 underline pt-2" href={redirectToOrderLink}>{numOrders} Orders {">"}</a>
            </div>
        </div>
    )
}