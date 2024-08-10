import { PdfViewer } from "@/components"

const Home: React.FC = () => (
  <main className="flex flex-col md:flex-row  bg-yellow-500">
    <section className="flex flex-col justify-center items-center gap-10 p-10 h-screen md:w-1/2">
      <h1 className="text-center font-bold text-blue-800 text-8xl">Lease Agreement Generator</h1>
      <h6 className="text-center font-bold text-teal-700 text-3xl">Create your own custom lease agreement</h6>
    </section>
    <PdfViewer />
  </main>
)

export default Home