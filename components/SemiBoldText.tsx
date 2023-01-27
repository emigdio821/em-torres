interface SemiBoldTextProps {
  children: React.ReactNode
}

export default function SemiBoldText({ children }: SemiBoldTextProps) {
  return <span style={{ fontWeight: 600 }}>{children}</span>
}
