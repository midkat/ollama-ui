import ContentLayout from './ContentLayout'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Content = () => {
  return (
    <ContentLayout>
      <div className="flex justify-between items-center">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="my-4 border h-[80vh] rounded-sm">

      </div>
      <div className='flex my-4 justify-between items-center space-x-2'>
        <Textarea className='resize-none' />
        <div className=''>
          <Button variant={'default'}>Send</Button>
        </div>
      </div>
    </ContentLayout>
  )
}

export default Content
