
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
export default function Students() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <p className="text-5xl">Hello Students</p>
        </main>
      </div>
    </div>
  )
}
