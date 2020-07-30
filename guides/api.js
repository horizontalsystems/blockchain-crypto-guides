import fs from 'fs'
import path from 'path'
import json from '../index.json'

const cache = indexedData()

function indexedData() {
  const cached = {}

  const getNext = (list, i, max = 4) => {
    if (list.length <= max) {
      return list
    }

    const res = list.slice(i, i + max)
    if (res.length < max) {
      return [...res, ...list.slice(0, max - res.length)]
    }

    return res
  }

  json.forEach(({ title, guides }) => {
    const mapped = guides.map(item => {
      const slug = item.file_url.replace(/^guides\//, '')
      const image = item.image_url.replace(/^guides\//, '/guide/')

      return {
        slug,
        image,
        title: item.title,
        date: item.updated_at,
        type: title
      }
    })

    mapped.forEach(({ slug, ...guide }, index) => {
      cached[slug] = {
        ...guide,
        next: getNext(mapped, index + 1)
      }
    })
  })

  return cached
}

export function getGuideBySlug(slug, fields = []) {
  const fullPath = path.join(process.cwd(), 'guides', slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const cached = cache[slug]

  const data = {}

  fields.forEach(field => {
    if (field === 'slug') {
      data[field] = slug
    }

    if (field === 'content') {
      data[field] = fileContents
    }

    if (cached[field]) {
      data[field] = cached[field]
    }
  })

  return data
}

export default function getAllGuides(fields = []) {
  const files = []

  json.forEach(({ title, guides }) => {
    guides.forEach(item => {
      const url = item.file_url.replace(/^guides\//, '')
      files.push(url)
    })
  })

  return files.map(slug =>
    getGuideBySlug(slug, fields)
  )
}
