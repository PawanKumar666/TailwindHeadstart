export default function TopSection({storeLink}) {
    return (
        <div>
            <h1 className="text-xl font-bold">Top Section</h1>
            <a className="underline" href={storeLink}>Visit Store</a>
        </div>
    )
}