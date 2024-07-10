export default function Grid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 text-left sm:text-center">
            {['red', 'green', 'blue'].map((color, index) => (
                <div key={index} className={`bg-${color}-500 md:col-span-4 p-2`}>
                    <h1>Hello World</h1>
                </div>
            ))}
        </div>
    );
}   