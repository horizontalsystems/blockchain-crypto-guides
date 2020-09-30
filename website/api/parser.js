import remark from 'remark'
import slug from 'remark-slug'
import autolink from 'remark-autolink-headings'
import flattenImageParagraphs from 'mdast-flatten-image-paragraphs'
import html from 'remark-html'

export async function parse(markdown) {
  const processor = remark()
    .use(slug)
    .use(autolink)
    .use(flattenImageParagraphs)
    .use(html)

  const result = await processor.process(markdown)
  const parsed = await processor.parse(markdown)

  return {
    node: parsed,
    content: result.toString()
  }
}

export function mapChild(children) {
  const result = []

  children.forEach(item => {
    const data = { type: item.type }

    if (item.depth) {
      data.depth = item.depth
    }

    if (item.value) {
      data.value = item.value
    }

    if (item.children) {
      data.children = mapChild(item.children)
    }

    result.push(data)
  })

  return result
}
