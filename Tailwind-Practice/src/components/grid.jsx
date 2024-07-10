export default function Grid(){
    return (
        // By default it stays in the left side
        // sm:text-center makes it center in the screen size of 640px and above
        <div className="grid grid-cols-12 text-left sm:text-center">
            <div className="bg-red-500 col-span-7 p-2">
                <h1>Hello World</h1>
            </div>
            <div className="bg-green-500 col-span-3 p-2">
                <h1>Hello World</h1>
            </div>
            <div className="bg-blue-500 col-span-2 p-2">
                <h1>Hello World</h1>
            </div>
        </div>
    )
}