import fs from 'fs'
import path from 'path'
import json from '../../index.json'

const cache = indexedData()

function indexedData() {
  const cached = {}

  const getNext = (list, i, max = 4) => {
    if (list.length <= 1) return null
    if (list.length <= max) {
      return list
    }

    const res = list.slice(i, i + max)
    if (res.length < max) {
      return [...res, ...list.slice(0, max - res.length)]
    }

    return res
  }

  const mapCache = guides => {
    guides.forEach(({ slug, ...guide }, index) => {
      cached[slug] = {
        ...guide,
        next: getNext(guides, index + 1)
      }
    })
  }

  const mapItem = (type, date, guide) => {
    const slug = guide.file.replace(/^guides\//, '')
    const image = guide.image.replace(/^guides\//, '/guide/')

    return {
      slug,
      image,
      date,
      type,
      title: guide.title
    }
  }

  json.forEach(({ category, guides }) => {
    const mapped = {}

    guides.forEach(guide => {
      Object.keys(guide).forEach(lang => {
        const item = guide[lang]
        const map = mapped[lang] || (mapped[lang] = [])

        map.push(mapItem(category[lang], item.updated_at, item))
      })
    })

    Object.keys(mapped).forEach(lang => {
      mapCache(mapped[lang])
    })
  })

  return cached
}

export function getGuideByLang(lang, slug, fields) {
  const filePath = slug.join('/')
  const fullPath = path.join(process.cwd(), '../guides', filePath)

  if (fs.existsSync(fullPath)) {
    return getGuideBySlug(filePath, fields)
  }

  const re = new RegExp(`\/${lang}\/`, 'i');

  return getGuideBySlug(filePath.replace(re, '/en/'), fields)
}

export function getGuideBySlug(slug, fields = []) {
  const fullPath = path.join(process.cwd(), '../guides', slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const cached = cache[slug] || {}
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

export default function getAllGuides(fields = [], lang) {
  const files = {}

  const mapSlugs = item => {
    const folderName = /^guides\//
    const url = item.file.replace(folderName, '')
    files[url] = url
  }

  json.forEach(({ guides }) => {
    guides.forEach(item => {
      Object.keys(item).forEach(key => {
        if (!lang) {
          mapSlugs(item[key])
        } else if (lang === key) {
          mapSlugs(item[key])
        }
      })
    })
  })

  return Object.keys(files).map(slug =>
    getGuideBySlug(slug, fields)
  )
}
