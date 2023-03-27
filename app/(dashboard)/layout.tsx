import "@/styles/global.css"
import GlassPane from "@/components/GlassPane"
import Sidebar from "@/components/Sidebar"

interface AuthRootLayoutProps {
  children: React.ReactNode
}

export default function DashboardRootLayout({ children }: AuthRootLayoutProps) {
  return (
    <html lang="en">
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  )
}
