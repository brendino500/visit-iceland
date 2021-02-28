export default function CarouselSlide({ content, index }) {
  console.log('content', content)
  return (
    <div>
      <h1>{content[0].activity}</h1>
    </div>
  )
}
