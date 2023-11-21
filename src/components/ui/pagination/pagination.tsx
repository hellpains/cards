import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import { decksSlice, useAppDispatch } from '@/services'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationPropsType = {
  limit: number
  page: number
  setLimit?: (value: number) => void
  setPage: (page: number) => void
  totalPage: number
}

export const Pagination = (props: PaginationPropsType) => {
  const { limit, page, setLimit, setPage, totalPage } = props
  const dispatch = useAppDispatch()

  let pageNo: number

  if (page <= totalPage) {
    pageNo = page
  } else {
    debugger
    setPage(totalPage)
    dispatch(decksSlice.actions.setCurrentPage)
    pageNo = page
  }
  const array = usePagination(totalPage, pageNo, 1)

  const classnames = {
    activeNumber(value: number | string) {
      return clsx(value !== '...' ? s.page : '', pageNo === value ? s.activeNumber : '')
    },
  }

  const options = [
    { title: '5', value: '5' },
    { title: '7', value: '7' },
    { title: '15', value: '15' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
  ]

  const onChangeHandler = (value: number | string) => {
    changePage(value, totalPage, setPage, page)
  }
  const setLimitHandler = (value: string) => {
    setLimit && setLimit(+value)
  }

  return (
    <div className={`${s.container}`}>
      <div className={s.arrowLeft} onClick={() => onChangeHandler('prevValue')}>
        <ArrowLeft />
      </div>
      {array &&
        array.map((value: number | string, index) => {
          if (value === pageNo) {
            return (
              <div
                className={classnames.activeNumber(value)}
                key={index}
                onClick={() => onChangeHandler(value)}
              >
                {value}
              </div>
            )
          } else {
            return (
              <div
                className={classnames.activeNumber(value)}
                key={index}
                onClick={() => onChangeHandler(value)}
              >
                {value}
              </div>
            )
          }
        })}
      <div className={s.arrowRight} onClick={() => onChangeHandler('nextValue')}>
        <ArrowRight />
      </div>
      <div className={s.limits}>
        <div>Показать</div>
        <div className={s.selectWrap}>
          <Select
            className={s.select}
            options={options}
            setValue={setLimitHandler}
            value={String(limit)}
          />
        </div>

        <div>на странице</div>
      </div>
    </div>
  )
}

const changePage = (
  value: number | string,
  totalPage: number,
  setPage: (page: number) => void,
  currentPage: number
) => {
  if (value === 'prevValue') {
    if (currentPage !== 1) {
      setPage(currentPage - 1)
    }
  } else if (value === 'nextValue') {
    if (currentPage !== totalPage) {
      setPage(currentPage + 1)
    }
  } else if (value === '...') {
    return
  } else {
    setPage(+value)
  }
}
