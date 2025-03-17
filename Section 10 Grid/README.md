# NOTES:

## Display: Grid

1. Flex for 1d layout and Grid for 2d layout
2. grid-template-columns/rows: 1fr 2fr (So this means that the first column or row will be 1 fractional ratio and second one will be 2 fractional ratio). This means its simply 1:2 ratio

## Grid Sizing

1. When we use auto on a row = fit content
2. When we use auto on column = fit screen size
3. Using fr for fractional ratio
4. using minmax(400px,800px) = this is pretty self explanatory imo
5. grid-auto-rows = if we add 5 things inside our 2x2 grid, it will auto add rows with the px

## Grid Placement

1. div -> Grid container -> Grid items -> Grid lines -> Rows and columns (Tracks) -> Grid cell
2. grid-column: span 2; (span is to tell it to start where it meant to start and span for the number we specify)
   - grid-column-start: span 2;
   - grid-column-end: auto
3. Cool tips is, -1 is the last line on the column (like list in python)
4. So we can just specify:
   - grid-column-start: 1
   - grid-column-end: 3
   - grid-row-start: 2
   - grid-row-end: 3
5. But we can just simply write **grid-area: 2 1 3 3** (row-start, column-start, row end, column-end)
