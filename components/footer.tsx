import { ThemeToggler } from './theme-toggler'

export function Footer() {
  return (
    <footer className="mt-auto px-4 print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 pb-4">
        <span className="flex items-center gap-1 text-xs">
          <span className="font-semibold">{new Date().getFullYear()}</span>
          <div className="bg-border h-3 w-px" />
          <span>Emigdio Torres</span>
          <div className="bg-border h-3 w-px" />
          <ThemeToggler />
        </span>
      </div>
    </footer>
  )
}
