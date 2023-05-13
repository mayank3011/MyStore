
import Layout from "@/components/Layout"
import { useSession } from "next-auth/react"
export default function Home() {
  const {data:session}=useSession()

  return <Layout>
    <div className="text-blue-900 flex justify-between" >
      <h1>
      Hello, <b>{session?.user?.name}</b>
      </h1>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg">
      <img className="rounded-l-lg w-8 h-8" src={session?.user?.image} alt=""/>
      <span className="py-1 px-2">{session?.user?.name}</span>
      </div>
    </div>
  </Layout>
}
