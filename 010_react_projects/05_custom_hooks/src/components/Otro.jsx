import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageURL } = useCatImage({ fact: 'random fact' })
  console.log(imageURL)

  return (
    <>
      {imageURL && <img src={imageURL} />}
    </>
  )
}
