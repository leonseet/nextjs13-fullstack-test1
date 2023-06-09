import clsx from "clsx"
import { ReactNode, FC } from "react"

interface GlassPaneProps {
  children: ReactNode
  className?: string
}

const GlassPane: FC<GlassPaneProps> = ({ children, className }) => {
  return (
    <div className={clsx("glass rounded-2xl border-solid border-2 border-gray-200", className)}>
      {children}
    </div>
  )
}

export default GlassPane
