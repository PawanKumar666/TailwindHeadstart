export default function TopSection({storeLink}) {
    return (
        <div className="py-5">
            <h1 className="text-xl font-bold">Top Section</h1>
            <a className="underline" href={storeLink}>Visit Store</a>
        </div>
    )
}