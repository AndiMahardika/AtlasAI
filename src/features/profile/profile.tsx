import Navbar from "@/components/share/navbar"
import useUserStore from "@/store/useUserProfile"
import { Table, TableBody,TableCell,TableRow } from "@/components/ui/table"

export default function Profile() {
  const { userData } = useUserStore()

  return (
    <main className="">
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-slate-200 border-2 rounded-md p-2 space-y-4 md:w-2/5 w-full mx-2 md:mx-0">
          <h3 className="font-bold text-xl">User Profile :</h3>
          <img 
          src={userData?.avatar_url || "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg"} 
          alt="" 
          onError={(e) => (e.currentTarget.src = 'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg')}
          className="rounded-full mx-auto w-40 h-40"   
          />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Nama :</TableCell>
              <TableCell>{userData?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Email :</TableCell>
              <TableCell>{userData?.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Phone :</TableCell>
              <TableCell>{userData?.phone || "Not Available"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </div>
    </main>
    // <div>
    //   Profile {userData?.name}
    //   <img 
    //     src={userData?.avatar_url || "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg"} 
    //     alt="" 
    //     onError={(e) => (e.currentTarget.src = 'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg')} />  
    //   Email : {userData?.email}
    //   Phone : {userData?.phone || "Not Avaiable"}
    // </div>
  )
}
