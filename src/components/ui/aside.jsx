
export default function Aside(){
    return(
        <>
            {/* Sidebar */}
      <aside className="w-64  border-r p-4">
        <h1 className="text-xl font-bold mb-6">Terra Tech</h1>
        <nav className="flex flex-col gap-2">
          <a href="#" className="p-2 rounded hover:bg-gray-100">Dashboard</a>
          <a href="#" className="p-2 rounded hover:bg-gray-100">Contracts</a>
          <a href="#" className="p-2 rounded hover:bg-gray-100">Reports</a>
          <a href="#" className="p-2 rounded hover:bg-gray-100">Settings</a>
        </nav>
      </aside>
        </>
    )
}