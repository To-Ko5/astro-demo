import ThemeButton from '@/components/original/theme-button'
import { Button } from '@/components/ui/button'
// import { site } from '@/data/data'
import { PrinterIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className="mt-5 mb-4 print:hidden">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div className="flex-1">
            <div>{/* <Link href="/">{site.title}</Link> */}</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                window.print()
              }}
            >
              <PrinterIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Print</span>
            </Button>
          </div>
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

export default Header
