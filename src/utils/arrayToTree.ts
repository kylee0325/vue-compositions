export interface FormatOptions {
  parentKey: string
  childrenKey: string
  idKey: string
}

type ID = string | number | null

function getOptions(options: Partial<FormatOptions>): FormatOptions {
  return Object.assign({ parentKey: 'parent_id', childrenKey: 'children', idKey: 'id' }, options)
}

export function array2tree<T>(list: T[], rootId: ID = null, options: Partial<FormatOptions>) {
  const opts = getOptions(options)
  const findChildren = (parentId: ID) => {
    const children: T[] = []
    list.forEach((category: any) => {
      if (category[opts.parentKey] === parentId) {
        const found = findChildren(category[opts.idKey])
        children.push(
          found.length
            ? {
                ...category,
                [opts.childrenKey]: found
              }
            : category
        )
      }
    })
    return children
  }
  return findChildren(rootId)
}

type IdMap = {
  [key: string]: any
}

export function arrayToTree<T>(list: T[], rootId: ID = null, options: Partial<FormatOptions>) {
  const opts = getOptions(options)
  const treeData: T[] = []
  const arr = list.map((item) => ({ ...item }))

  const idMap: IdMap = {}
  arr.forEach((item: any) => {
    idMap[item[opts.idKey]] = item
  })

  arr.forEach((item: any) => {
    const parentId = item[opts.parentKey]

    if (parentId === rootId) {
      treeData.push(item)
    } else if (idMap[parentId]) {
      if (idMap[parentId][opts.childrenKey]) {
        idMap[parentId][opts.childrenKey].push(item)
      } else {
        idMap[parentId][opts.childrenKey] = [item]
      }
    }
  })

  return treeData
}
