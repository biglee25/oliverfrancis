export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-4xl lg:text-6xl tracking-tighter leading-tight md:leading-none my-6 md:my-12 text-center">
      {children}
    </h1>
  )
}
