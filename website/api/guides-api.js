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
    const slug = guide.file_url.replace(/^guides\//, '')
    const image = guide.image_url.replace(/^guides\//, '/guide/')

    return {
      slug,
      image,
      date,
      type,
      title: guide.title
    }
  }

  json.forEach(({ title, guides }) => {
    const mapped = {
      en: []
    }

    guides.forEach(item => {
      const translation = item.translation || {}

      Object.keys(translation).forEach((lang, i) => {
        const guide = translation[lang]
        const langMap = mapped[lang] || (mapped[lang] = [])
        langMap.push(mapItem(title, item.updated_at, guide))
      })

      mapped.en.push(mapItem(title, item.updated_at, item))
    })

    Object.keys(mapped).forEach(lang => {
      mapCache(mapped[lang])
    })
  })

  return cached
}

export function getGuideByLang(lang, slug, fields) {
  const category = slug[0]
  const filePath = slug.slice(1, slug.length).join('/')
  const fullPath = path.join(process.cwd(), '../guides', category, lang, filePath)
  if (fs.existsSync(fullPath)) {
    return getGuideBySlug([category, lang, filePath].join('/'), fields)
  }

  return getGuideBySlug(slug.join('/'), fields)
}

export function getGuideBySlug(slug, fields = [], cacheSlug) {
  const fullPath = path.join(process.cwd(), '../guides', slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const cached = cache[cacheSlug] || cache[slug] || {}

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

export default function getAllGuides(fields = [], lang = 'en') {
  const files = {}

  const mapSlugs = item => {
    const folderName = /^guides\//
    const url = item.file_url.replace(folderName, '')

    if (lang === 'en') {
      files[url] = url
    } else {
      const trMap = item.translation || {}
      const trElement = trMap[lang]
      if (trElement) {
        files[url] = trElement.file_url.replace(folderName, '')
      }
    }
  }

  json.forEach(({ guides }) => {
    guides.forEach(mapSlugs)
  })

  return Object.keys(files).map(slug =>
    getGuideBySlug(slug, fields, files[slug])
  )
}
