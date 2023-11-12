import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import { useAppDispatch, useAppSelector } from '@/services'
import { decksSlice } from '@/services/decks/decks.slice'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationPropsType = {
  limit: any
  page: number
  setPage: (page: number) => void
  totalPage: number
}

const changePage = (
  value: number | string,
  totalPage: number,
  dispatch: any,
  currentPage: number
) => {
  if (value === 'prevValue') {
    if (currentPage !== 1) {
      dispatch(decksSlice.actions.setCurrentPage(currentPage - 1))
    }
  } else if (value === 'nextValue') {
    if (currentPage !== totalPage) {
      dispatch(decksSlice.actions.setCurrentPage(currentPage + 1))
    }
  } else if (value === '...') {
    return
  } else {
    dispatch(decksSlice.actions.setCurrentPage(+value))
  }
}

export const Pagination = (props: PaginationPropsType) => {
  const currentPage = useAppSelector<any>(state => state.decks.currentPage)
  const { limit, page, setPage, totalPage } = props
  const dispatch = useAppDispatch()
  let pageNo: number

  if (page <= totalPage) {
    pageNo = page
  } else {
    setPage(totalPage)
    pageNo = page
  }

  const array = usePagination(totalPage, pageNo, 2)

  const classnames = {
    pageNumber(value: number | string) {
      return clsx(s.page, pageNo === value ? s.activeNumber : '')
    },
  }
  const onChangeHandler = (value: number | string) => {
    // dispatch(setCurrentPage(+value))
    changePage(value, totalPage, dispatch, currentPage)
  }
  const options = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]

  const setLimit = (value: string) => {
    dispatch(decksSlice.actions.setPerPage(+value))
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
                className={classnames.pageNumber(value)}
                key={index}
                onClick={() => onChangeHandler(value)}
              >
                {value}
              </div>
            )
          } else {
            return (
              <div
                className={classnames.pageNumber(value)}
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
            setValue={setLimit}
            value={String(limit)}
          />
        </div>

        <div>на странице</div>
      </div>
    </div>
  )
}
