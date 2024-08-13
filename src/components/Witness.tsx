export const Witness: React.FC = () => {

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <input type="text" className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none" placeholder="Witness Name" />
            <input type="number" className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none" placeholder="Social Security Number" />
        </div>
    )
}