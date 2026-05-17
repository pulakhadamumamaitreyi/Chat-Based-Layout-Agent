export function transformLayout(layout: any, instruction: string) {
  const updated = JSON.parse(JSON.stringify(layout))

  const nodes = updated.nodes

  const headline = Object.values(nodes).find(
    (node: any) =>
      node.type === 'text' &&
      node.data?.content?.includes('Luxury Comfort')
  ) as any

  const product = Object.values(nodes).find(
    (node: any) =>
      node.name === 'Product.png'
  ) as any

  const offerBadge = Object.values(nodes).find(
    (node: any) =>
      node.type === 'shape'
  ) as any

  if (!headline || !product) {
    return updated
  }

  const lower = instruction.toLowerCase()

  if (lower.includes('9:16')) {
    const artboard = Object.values(nodes).find(
      (n: any) => n.type === 'artboard'
    ) as any

    artboard.height = 1920
    artboard.width = 1080

    headline.y = 180
    product.y = 1150

    if (offerBadge) {
      offerBadge.y = 900
    }
  }

  if (lower.includes('headline to the top')) {
    headline.y = 100
  }

  if (lower.includes('headline smaller')) {
    headline.style.visual.fontSize -= 12
  }

  if (lower.includes('offer badge higher') && offerBadge) {
    offerBadge.y -= 120
  }

  if (lower.includes('keep the product large')) {
    product.width *= 1.05
    product.height *= 1.05
  }

  return updated
}
