export const Locator: React.FC = () => (
  <div className="flex flex-col gap-4 w-full h-max">
    <h1 className="font-bold font-sans text-center text-3xl">LOCATOR</h1>
    <input
      type="text"
      className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
      placeholder="Name"
    />
    <section className="flex flex-col md:flex-row justify-evenly gap-4">
      <input
        type="number"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Social Secutiry Number"
      />
      <input
        type="number"
        className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
        placeholder="Identity Card Number"
      />
    </section>
    <input
      type="text"
      className="font-sans p-2 w-full h-max border border-blue-500 text-2xl text-cyan-600 outline-none"
      placeholder="Property Address"
    />
  </div>
);
