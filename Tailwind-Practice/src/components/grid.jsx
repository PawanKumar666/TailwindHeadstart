export default function Grid(){
    return (
        <div className="grid grid-cols-12 text-center">
            <div className="bg-red-500 col-span-7">
                <h1>Hello World</h1>
            </div>
            <div className="bg-green-500 col-span-3">
                <h1>Hello World</h1>
            </div>
            <div className="bg-blue-500 col-span-2">
                <h1>Hello World</h1>
            </div>
        </div>
    )
}