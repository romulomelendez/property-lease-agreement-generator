export const Rental2: React.FC = () => {

    return (
        <section className="flex flex-col gap-8 mb-5">
            <span className="font-bold font-sans text-center text-3xl">
                RENTAL 2/2
            </span>
            <div className="flex flex-col gap-4">
                <input type="number" className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none" placeholder="Days Rented(optional)" />
                <input type="number" className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none" placeholder="Rental Amount" />
                <input type="number" className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none" placeholder="Rent Due Date" />
            </div>
        </section>
    )
}