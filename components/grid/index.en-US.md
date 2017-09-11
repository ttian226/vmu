---
category: Components
type: Data Display
title: Grid
---

We divided the design area into a number of aliquots in horizontal and vertical.

### Rules
- The contents of the blocks should have the same type. eg: they are all pictures or icons with text.


## API

Support WEB

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    |    data record array to be rendered     | `Array<{icon, text}>`  | [] |
| onClick    |   Handler to be called when the user taps the grid   | (el: Object, index: number): void  | - |
| columnNum    |   the number of columns   | number  |  `4` |
| hasLine    |   whether to show border    | boolean  |  `true` |
| renderItem    |   custom function to create each grid item   | (el: Object): html string  | - |
