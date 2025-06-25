
export default function Button({ children, className, onClick } : { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}
