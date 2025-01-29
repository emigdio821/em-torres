import { ThemeToggler } from './theme-toggler'

export function Footer() {
  return (
    <footer className="mt-auto px-4 print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 pb-4">
        <ThemeToggler />
        <span className="text-muted-foreground flex items-center gap-1 text-sm">
          <span className="font-semibold">{new Date().getFullYear()}</span> · Emigdio Torres
        </span>
      </div>
    </footer>
  )
}
