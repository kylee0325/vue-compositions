# arrayToTree

---

数组转树形结构数据的函数，可自定义传入父级的字段、id 的字段、子级的字段。该函数所用算法的复杂度为 O(n)。

## API

```typescript
arrayToTree(list, rootId, options)
```

## Params

| 参数名  | 描述                    | 类型                             | 默认值                                                             |
| ------- | ----------------------- | -------------------------------- | ------------------------------------------------------------------ |
| list    | 数组                    | any[]                            | []                                                                 |
| rootId  | 根节点 ID               | string &#124; number &#124; null | null                                                               |
| options | 配置对应的 key 的字段名 | string                           | `{ parentKey: 'parent_id', childrenKey: 'children', idKey: 'id' }` |

## Example

<ArrayToTree/>

## Code

```vue
<script>
import { arrayToTree } from 'vue-compositions'

export default {
  setup() {
    const arr = [
      {
        parent_id: 2,
        id: 10,
        name: '10'
      },
      {
        parent_id: null,
        id: 1,
        name: '1'
      },
      {
        parent_id: 1,
        id: 2,
        name: '2'
      },
      {
        parent_id: 1,
        id: 3,
        name: '3'
      },
      {
        parent_id: 2,
        id: 4,
        name: '4'
      },
      {
        parent_id: 4,
        id: 5,
        name: '5'
      }
    ]
    const finalTree = arrayToTree(arr, null, { childrenKey: 'child' })
  }
}
</script>
```
