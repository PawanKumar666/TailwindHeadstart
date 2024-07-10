export default function Grid(){
    return (
        <div className="grid grid-cols-4 text-center">
            <div className="bg-red-500 col-span-1">
                <h1>Hello World</h1>
            </div>
            <div className="bg-green-500 col-span-2">
                <h1>Hello World</h1>
            </div>
            <div className="bg-blue-500">
                <h1>Hello World</h1>
            </div>
        </div>
    )
}