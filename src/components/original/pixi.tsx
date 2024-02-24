import { AdjustmentFilter } from '@pixi/filter-adjustment'
import { Container, Sprite, Stage, withFilters } from '@pixi/react'
import { BlurFilter, NoiseFilter } from 'pixi.js'
import { useMemo } from 'react'

const Filters = withFilters(Container, {
  blur: BlurFilter,
  noise: NoiseFilter,
  adjust: AdjustmentFilter
})

const demo = () => {
  return (
    <Stage width={500} height={500}>
      <Filters
        blur={{ blur: 0.1 }}
        noise={{ noise: 0.5 }}
        adjust={{ gamma: 1, brightness: 1 }}
      >
        <Sprite
          cursor="pointer"
          interactive={true}
          eventMode="static"
          image="photo.jpg"
          width={100}
          height={50}
          x={100}
          y={100}
          onclick={() => {
            console.log('click event')
          }}
        />
        <Sprite
          image="photo.jpg"
          width={100}
          height={50}
          x={400}
          y={270}
          anchor={{ x: 1, y: 1 }}
        />
      </Filters>
    </Stage>
  )
}

export default demo
