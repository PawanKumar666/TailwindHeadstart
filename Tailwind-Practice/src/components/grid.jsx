export default function Grid() {
    // This component renders a responsive grid with three colored sections.
    // Each section has a background color (red, green, or blue) and contains a "Hello World" heading.
    // The grid layout changes based on the screen size, with a single column on small screens and twelve columns on medium and larger screens.
    // On medium and larger screens, each section spans four columns.
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