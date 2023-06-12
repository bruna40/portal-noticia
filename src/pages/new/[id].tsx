import { useRouter } from "next/router"

export default function New() {
  const {query} = useRouter()
  return (
    <h1>ID: {JSON.stringify(query)}</h1>
  )
}
