import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import { clsx } from 'clsx'
import _ from 'lodash'

import s from './pagination.module.scss'

type PaginationPropsType = {
  className?: string
  currentPage: number
  limit: string
  paginate: (number: number) => void
  setCurrentPage: (currentPage: number) => void
  setLimit: (limit: string) => void
  totalPosts: number
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
    const leftRange = _.range(1, leftItemsCount + 1)

    return [...leftRange, '...', totalPage]
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings
    const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1)

    return [1, '...', ...rightRange]
  } else {
    const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1)

    return [1, '...', ...middleRange, '...', totalPage]
  }
}

export const Pagination = (props: PaginationPropsType) => {
  const { className, currentPage, limit, paginate, setCurrentPage, setLimit, totalPosts } = props
  const options = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalPosts / +limit); i++) {
    pageNumbers.push(i)
  }
  const classNames = {
    arrowLeft: clsx(s.arrowLeft),
    arrowRight: clsx(s.arrowRight),
    container: clsx(s.container, className),
    page: clsx(s.page),
  }

  const decrementCurrentPage = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }
  const incCurrentPage = () => {
    if (currentPage === pageNumbers.length) {
      return
    }
    setCurrentPage(currentPage + 1)
  }
  const array = returnPaginationRange(Math.ceil(totalPosts / +limit), currentPage, 2)

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
          paginate(+value)
        }

        return (
          <div
            className={`${classNames.page} ${currentPage === value ? s.activeNumber : ''} ${
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
        <Select options={options} setValue={setLimit} value={limit} />
        <div>на странице</div>
      </div>
    </div>
  )
}
