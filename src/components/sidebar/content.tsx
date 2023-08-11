'use client'

export const SidebarContent = ({ children }) => {
  return (
    <section className='w-full h-full py-3 scroll-content'>
      <div className={`w-full space-y-3 pr-2`}>
        {children}
      </div>
    </section>
  )
}
