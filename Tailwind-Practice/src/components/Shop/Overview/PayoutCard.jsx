export default function PayoutCard({title, hasWarning, amount, numOrders, redirectToOrderLink, nextPaymentDate}){
    return (
        <div className="bg-blue-500 rounded-md shadow-lg w-1/3">
            <div className="text-white p-3">
                <div className="flex justify-left p-2 text-gray-300 text-xl">
                    <h1 className="pr-2">{title}</h1>
                    {hasWarning && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        }
                </div>
                <div className="flex justify-between">
                    <h1 className="pr-2 text-4xl">{amount}</h1>
                    <a href={redirectToOrderLink} className="underline pt-2">{numOrders} Orders {">"}</a>
                </div>
            </div>
            <div className="flex justify-between rounded-md bg-blue-600 text-white px-3 py-2">
                <h3>Next Payment Date :</h3>
                <h3>{nextPaymentDate}</h3>
            </div>
        </div>
    )
}