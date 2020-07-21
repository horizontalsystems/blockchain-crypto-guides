import fs from 'fs'
import path from 'path'
import json from '../index.json'

export function getGuideBySlug(slug, fields = []) {
  const fullPath = path.join(process.cwd(), 'guides', slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug
    }

    if (field === 'content') {
      items[field] = fileContents
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
