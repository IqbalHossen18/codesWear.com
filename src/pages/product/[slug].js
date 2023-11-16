import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query;
  return (
    <div>This is slug post: {slug}</div>
  )
}

export default Slug