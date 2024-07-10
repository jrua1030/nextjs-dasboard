import { fetchRevenue } from "../lib/data"

export default async function Page(){
    const revenue = await fetchRevenue()
    console.log("data",revenue)
    return <p>Dashboard Page</p>
}