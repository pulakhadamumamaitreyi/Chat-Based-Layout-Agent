'use client'
                style={{
                  left: node.x / 2,
                  top: node.y / 2,
                  width: node.width / 2,
                  height: node.height / 2
                }}
              />
            )
          }

          if (node.type === 'text') {
            return (
              <div
                key={node.id}
                className="absolute whitespace-pre-wrap"
                style={{
                  left: node.x / 2,
                  top: node.y / 2,
                  width: node.width / 2,
                  height: node.height / 2,
                  color: node.style?.visual?.color?.value || '#000',
                  fontSize: node.style?.visual?.fontSize / 2,
                  fontWeight: node.style?.visual?.fontWeight,
                  fontStyle: node.style?.visual?.fontStyle
                }}
              >
                {node.data?.content}
              </div>
            )
          }

          if (node.type === 'shape') {
            return (
              <div
                key={node.id}
                className="absolute rounded-full"
                style={{
                  left: node.x / 2,
                  top: node.y / 2,
                  width: node.width / 2,
                  height: node.height / 2,
                  background: node.style?.visual?.fill?.value
                }}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
