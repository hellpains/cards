export const usePagination = (totalPage: number, page: number, siblings: number) => {
  const totalPageNoInArray = 7 + siblings

  if (totalPageNoInArray >= totalPage) {
    return range(1, totalPage + 1)
  }
  const leftSiblingsIndex = Math.max(page - siblings, 1)
  const rightSiblingsIndex = Math.min(page + siblings, totalPage)
  const showLeftDots = leftSiblingsIndex > 2
  const showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings
    const leftRange = range(1, leftItemsCount)

    return [...leftRange, '...', totalPage]
  }
  if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings
    const rightRange = range(totalPage - rightItemsCount + 1, totalPage)

    return [1, '...', ...rightRange]
  }
  if (showLeftDots && showRightDots) {
    const middleRange = range(leftSiblingsIndex, rightSiblingsIndex)

    return [1, '...', ...middleRange, '...', totalPage]
  }
}

const range = (start: number, end: number) => {
  const length = end - start

  return Array.from({ length }, (_, idx) => idx + start)
}
