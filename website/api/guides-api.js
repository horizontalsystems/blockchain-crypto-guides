import fs from 'fs'
import path from 'path'
import json from '../../index.json'

const cache = indexedData()

function indexedData() {
  const cached = {}

  const getNext = (list, nextIndex, max = 4) => {
    if (list.length <= 1) return null
    if (list.length <= max) {
      return list.filter((v, index) => index !== nextIndex - 1)
    }

    const res = list.slice(nextIndex, nextIndex + max)
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

  const mapItem = (id, type, date, guide) => {
    const slug = guide.file.replace(/^guides\//, '')
    const image = guide.image.replace(/^guides\//, '')

    return {
      id,
      type,
      slug,
      image,
      date,
      title: guide.title,
      description: guide.description || null
    }
  }

  json.forEach(({ id, category, guides }) => {
    const mapped = {}

    guides.forEach(guide => {
      Object.keys(guide).forEach(lang => {
        const item = guide[lang]
        const map = mapped[lang] || (mapped[lang] = [])

        map.push(mapItem(id, category[lang], item.updated_at, item))
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

  const re = new RegExp(`\/${lang}\/`, 'i')

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

export function getAllCategories(lang) {
  const categories = {
    recent: {}
  }

  json.forEach(({ id, category, guides }) => {
    if (!lang || guides.find(item => item[lang])) {
      categories[id] = category
    }
  })

  return categories
}

export function getAllGuideSlugs() {
  const slugs = []

  const mapSlugs = item => {
    const folderName = /^guides\//
    const url = item.file.replace(folderName, '')
    slugs.push(url)
  }

  json.forEach(({ guides }) => {
    guides.forEach(item => {
      Object.keys(item).forEach(key => mapSlugs(item[key]))
    })
  })

  return slugs
}

export function getAllGuides(fields = [], lang, categoryId) {
  const slugs = {}

  const mapSlugs = item => {
    const folderName = /^guides\//
    const url = item.file.replace(folderName, '')
    slugs[url] = url
  }

  const mapGuides = guides => {
    Object.keys(guides).forEach(guideLang => {
      if (!lang || lang === guideLang) {
        mapSlugs(guides[guideLang])
      }
    })
  }

  for (let i = 0; i < json.length; i++) {
    const { id, guides } = json[i]

    if (!categoryId || categoryId === 'recent' || categoryId === id) {
      guides.forEach(mapGuides)
    }
  }

  return Object.keys(slugs)
    .map(slug => getGuideBySlug(slug, fields))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}
