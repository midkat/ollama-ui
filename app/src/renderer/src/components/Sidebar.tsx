import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const Sidebar = () => {
  const history = ['History 1', 'History 2', 'History 3', 'History 4']
  return (
    <div className="border h-full px-3">
      <div className="flex justify-between items-center  my-2">
        {/* brand */}
        <div className="">
          <span className="font-bold">Ollama UI</span>
        </div>
        {/* hamburger */}
        <Button variant={'outline'} className="font-bold">
          <HamburgerMenuIcon />
        </Button>
      </div>
      {/* add button */}
      <div className="text-start my-4">
        <Button variant={'default'} className="w-full">
          New Chat
        </Button>
      </div>
      {/* history section  */}
      <div className="flex flex-col my-4">
        <span>Chat History</span>
        <br />
        <ScrollArea className="p-2 border rounded-md h-[70vh] flex flex-col justify-start">
          {history.map((item, index) => {
            return (
              <Button variant={'ghost'} className="w-full" key={index}>
                {item}
              </Button>
            )
          })}
        </ScrollArea>
        <br />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={'default'} className="w-full">
                Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-full'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Sidebar
