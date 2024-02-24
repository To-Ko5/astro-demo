import { AdjustmentFilter } from '@pixi/filter-adjustment'
import { Container, Sprite, Stage, useTick, withFilters } from '@pixi/react'
import { BlurFilter, NoiseFilter } from 'pixi.js'
import { OldFilmFilter } from 'pixi-filters'
import { useMemo, useState } from 'react'

const Filters = withFilters(Container, {
  blur: BlurFilter,
  noise: NoiseFilter,
  old: OldFilmFilter,
  adjust: AdjustmentFilter
})

const demo = () => {
  const [angle, setAngle] = useState(0)

  const Demo = () => {
    useTick((delta) => {
      setAngle(Math.random())
    })

    return (
      <Filters
        blur={{ blur: 0.1 }}
        noise={{ noise: angle }}
        old={{ enabled: true, sepia: 0.1, noiseSize: angle }}
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
    )
  }

  return (
    <Stage width={500} height={500}>
      <Demo />
    </Stage>
  )
}

export default demo
