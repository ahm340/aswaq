import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Hello this Main page
    <Link className="bg-lime-100 m-4 p-2 " href="/about">go to about page</Link>
    </main>
  )
}
