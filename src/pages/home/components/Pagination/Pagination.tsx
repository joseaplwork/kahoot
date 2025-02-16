import { ITEMS_PER_PAGE } from '../../constants/items-per-page'

import './Pagination.css'

interface Props {
  count: number
  next: string | null
  previous: string | null
  currentPage: number
  disabled: boolean
  onPageChange: (page: number) => void
}

export function Pagination({
  count,
  currentPage,
  onPageChange,
  disabled,
}: Props) {
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages || totalPages === 0
  const getPageNumbers = () => {
    const pages = []
    const middleCount = 3

    pages.push(1)

    let start = Math.max(2, currentPage - Math.floor(middleCount / 2))
    const end = Math.min(totalPages - 1, start + middleCount - 1)

    start = Math.max(2, end - middleCount + 1)

    if (start > 2) {
      pages.push(-1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1) {
      pages.push(-1)
    }

    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="pagination">
      <button
        disabled={isFirstPage || disabled}
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination__button"
      >
        {'<'}
      </button>

      {getPageNumbers().map(page =>
        page === -1 ? (
          <span
            key={`ellipsis-${Math.random()}`}
            className="pagination__ellipsis"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            disabled={disabled}
            onClick={() => onPageChange(page)}
            className={`pagination__button ${page === currentPage ? 'pagination__button--active' : ''}`}
          >
            {page}
          </button>
        ),
      )}

      <button
        disabled={isLastPage || disabled}
        onClick={() => onPageChange(currentPage + 1)}
        className="pagination__button"
      >
        {'>'}
      </button>
    </div>
  )
}
