import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/components'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table {...rest} className={`${s.table} ${className}`} ref={ref} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} className={s.tableHead} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr className={s.tableRow} {...rest} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, ...rest }, ref) => {
    return (
      <th className={s.tableHeadCell} {...rest} ref={ref}>
        {children}
      </th>
    )
  }
)

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ ...rest }, ref) => {
    return <td className={s.tableCell} {...rest} ref={ref} />
  }
)

export const TableEmpty: FC<ComponentProps<'div'> & { mb?: string; mt?: string }> = ({
  className,
  mb,
  mt = '89px',
}) => {
  return (
    <Typography
      className={`${s.empty} ${className}`}
      style={{ marginBottom: mb, marginTop: mt }}
      variant={'h2'}
    >
      Пока тут еще нет данных! :(
    </Typography>
  )
}

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort?: Sort
    },
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable = true, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
