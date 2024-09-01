export const Property: React.FC = () => {

    return (
        <section className="flex flex-col gap-4 w-full h-max">
            <span className="font-bold font-sans text-center text-3xl">
                PROPERTY
            </span>
            <input
                type="number"
                className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                placeholder="Zip Code"
            />
            <div className="flex justify-between gap-2">
                <input
                    type="text"
                    className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                    placeholder="Address"
                />
                <input
                    type="number"
                    className="font-sans p-2 w-32 h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                    placeholder="Number"
                />
            </div>
            <input
                type="text"
                className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                placeholder="Complement"
            />
            <div className="flex justify-between gap-2">
                <input
                    type="text"
                    className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
                    placeholder="City"
                />
                <input
                    type="text"
                    className="font-sans p-2 h-max w-32 border border-blue-500 text-2xl text-cyan-600 outline-none"
                    placeholder="State"
                />
            </div>
        </section>
    )
}