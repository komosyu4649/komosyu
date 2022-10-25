import { useRouter } from 'next/router'

const useCurrent = () => {
  const router = useRouter()
  const urlPath = router.asPath
  return { urlPath }
}

export default useCurrent
