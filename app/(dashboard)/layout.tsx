import React, { ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10 ">
        Mood
      </aside>
      <div className="ml-[200px]">
        <header className="border-b border-black/10">Header</header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
