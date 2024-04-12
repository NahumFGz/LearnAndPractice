// !Reglas de customHooks y hooks
// No se puede llamar a hooks en funciones normales
// Tampoco dentro de condicionales o bucles
// Pero su puedes llamar a hooks dentro de customHooks

// !BUENA PRACTICA
// Pasar los parametros como objetos para mantener la extensibilidad de las funciones
// Esto es a lo que  se le llama un parametro nombrado

import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log('threeFirstWords', threeFirstWords)

    const CAT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`
    console.log(CAT_URL)
    setImageUrl(CAT_URL)
  }, [fact])

  return { imageURL }
}// {imageURL: 'https://'}
