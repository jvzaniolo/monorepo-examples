import { Component } from 'ui'

export default function Home() {
  console.log()
  // ^ this should not be a lint warning
  return (
    <main>
      <Component />
      <img src="" alt="" />
      {/* ^ this should be a lint warning */}
    </main>
  )
}
