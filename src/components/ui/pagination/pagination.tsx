import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationPropsType = {
  limit: any
  page: number
  setLimit: (limit: any) => void
  setPage: (page: number) => void
  totalPage: number
}

export const Pagination = (props: PaginationPropsType) => {
  const { limit, page, setLimit, setPage, totalPage } = props

  const options = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ]
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
    changePage(value, pageNo, setPage, totalPage)
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
          <Select className={s.select} options={options} setValue={setLimit} value={limit} />
        </div>

        <div>на странице</div>
      </div>
    </div>
  )
}
const changePage = (
  value: number | string,
  page: number,
  setPage: (page: number) => void,
  totalPage: number
) => {
  if (value === 'prevValue') {
    if (page !== 1) {
      setPage(page - 1)
    }
  } else if (value === 'nextValue') {
    if (page !== totalPage) {
      setPage(page + 1)
    }
  } else if (value === '...') {
    return
  } else {
    setPage(+value)
  }
}
