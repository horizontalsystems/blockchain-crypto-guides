import fs from 'fs'
import path from 'path'
import json from '../index.json'

const cache = indexedData()

function indexedData() {
  const cached = {}

  json.forEach(({ title, guides }) => {
    guides.forEach(item => {
      const image = item.image_url.replace(/^guides\//, '/guide/')
      const slug = item.file_url.replace(/^guides\//, '')

      cached[slug] = {
        image,
        title: item.title,
        date: item.updated_at,
        type: title
      }
    })
  })

  return cached
}

export function getGuideBySlug(slug, fields = []) {
  const fullPath = path.join(process.cwd(), 'guides', slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const cached = cache[slug]

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug
    }

    if (field === 'content') {
      items[field] = fileContents
    }

    if (cached[field]) {
      items[field] = cached[field]
    }
  })

  return items
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
