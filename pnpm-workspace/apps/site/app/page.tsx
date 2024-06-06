import { Component } from 'ui'

export default function Home() {
  console.log()
  return (
    <main>
      <Component />
      <img src="" alt="" />
      {/* ^ this should be a lint warning */}
    </main>
  )
}
