import React from 'react'
import { cn } from '../utils/tailwind.utils';

const AppLayout = (props) => {
    const { children } = props;

    let sidebar = null;
    let content = null;
  
    // Using React.Children.map to categorize children into sidebar and content
    React.Children.forEach(children, child => {
      if (child.type === AppLayout.sidebar) {
        sidebar = child;
      } else if (child.type === AppLayout.content) {
        content = child;
      }
    });
  
  return (
    <div className={cn('grid grid-cols-5' , props && props.className)}>
        <div className='col-span-1 border h-screen overflow-auto'>
            {sidebar}
        </div>
        <div className='col-span-4 border h-screen'>
            {content}
        </div>
    </div>
  )
}


AppLayout.sidebar = (props) => props.children;
AppLayout.content = (props) => props.children;

export default AppLayout