import clsx from "clsx"
import { ReactNode, FC } from "react"

interface GlassPaneProps {
  children: ReactNode
  className?: string
}

const Card: FC<GlassPaneProps> = ({ className, children }) => {
  return (
    <div className={clsx("rounded-3xl px-10 py-4 drop-shadow-xl bg-white", className)}>
      {children}
    </div>
  )
}

export default Card
