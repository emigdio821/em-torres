import { useEffect } from 'react'

export default function useTitle(title: string = 'Em.') {
  useEffect(() => {
    document.title = title
  }, [title])
}
