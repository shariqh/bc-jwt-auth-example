import useSWR from 'swr'
import fetcher from "../lib/fetcher"

export default function Home({}) {
  const { data } = useSWR("/api/box/enterprise/getEnterpriseUsers", fetcher)

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-300 min-h-screen">
      <div className="mx-auto max-w-lg">
        <p className="text-lg pt-8 font-bold">Current Users</p>
        <div className="flex flex-col mx-auto">
          {JSON.stringify(data)}
        </div>
      </div>
    </div>
  )
}
