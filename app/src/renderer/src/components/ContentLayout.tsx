const ContentLayout = (props : {
    children : React.ReactNode
}) => {
  return (
    <div className="h-full px-3 py-2 ">
        {props.children}
    </div>
  )
}

export default ContentLayout