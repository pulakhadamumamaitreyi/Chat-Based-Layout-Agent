export type LayoutNode = {
  id: string
  type: string
  x: number
  y: number
  width: number
  height: number
  data?: any
  style?: any
}

export type LayoutJson = {
  rootNodes: string[]
  nodes: Record<string, LayoutNode>
}
