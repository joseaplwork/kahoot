import { useSearchParams } from 'react-router-dom'

export const useGetCurrentPage = () => {
  const [params, setParams] = useSearchParams()
  const currentPage = Number(params.get('page')) || 1
  const setCurrentPage = (page: number) => {
    setParams({ page: page.toString() })
  }

  return { currentPage, setCurrentPage }
}
