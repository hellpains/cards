import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import { clsx } from 'clsx'
import _ from 'lodash'

import s from './pagination.module.scss'

type PaginationPropsType = {
  className?: string
  limit: number
  page: number
  paginate: (number: number) => void
  setLimit: (limit: number) => void
  setPage: (page: number) => void
  totalPage: number
}

export const Pagination = (props: PaginationPropsType) => {
  const { className, limit, page, setLimit, setPage, totalPage } = props
  const options = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]
  const pageNumbers = []

  for (let i = (page - 1) * limit; i < page * limit; i++) {
    pageNumbers.push(i)
  }
  const classNames = {
    arrowLeft: clsx(s.arrowLeft),
    arrowRight: clsx(s.arrowRight),
    container: clsx(s.container, className),
    page: clsx(s.page),
  }

  const decrementCurrentPage = () => {
    if (page === 1) {
      return
    }
    setPage(page - 1)
  }
  const incCurrentPage = () => {
    if (page === pageNumbers.length) {
      return
    }
    setPage(page + 1)
  }
  const array = returnPaginationRange(totalPage, page, 1)

  return (
    <div className={`${classNames.container}`}>
      <div className={classNames.arrowLeft} onClick={decrementCurrentPage}>
        <ArrowLeft />
      </div>
      {array.map(value => {
        let disabled = false

        if (value === '...') {
          disabled = true
        }
        const changePage = () => {
          if (disabled) {
            return
          }
          setPage(value)
        }

        return (
          <div
            className={`${classNames.page} ${page === value ? s.activeNumber : ''} ${
              disabled ? s.disabled : ''
            }`}
            key={value}
            onClick={changePage}
          >
            {value}
          </div>
        )
      })}
      <div className={classNames.arrowRight} onClick={incCurrentPage}>
        <ArrowRight />
      </div>
      <div className={s.limits}>
        <div>Показать</div>
        <Select options={options} setValue={setLimit} value={String(limit)} />
        <div>на странице</div>
      </div>
    </div>
  )
}

const returnPaginationRange = (totalPage: number, page: number, siblings: number) => {
  const totalPageNoInArray = 7 + siblings

  if (totalPageNoInArray >= totalPage) {
    return _.range(1, totalPage + 1)
  }
  const leftSiblingsIndex = Math.max(page - siblings, 1)
  const rightSiblingsIndex = Math.min(page + siblings, totalPage)
  const showLeftDots = leftSiblingsIndex > 2
  const showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings
    const leftRange = _.range(1, leftItemsCount)

    return [...leftRange, '...', totalPage]
  }
  if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings
    const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage)

    return [1, '...', ...rightRange]
  }
  if (showLeftDots && showRightDots) {
    const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex)

    return [1, '...', ...middleRange, '...', totalPage]
  }
}
