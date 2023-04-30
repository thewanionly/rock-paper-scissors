import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useEffectOnUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      // Only execute effect callback during deps update, not on mount
      return effect()
    } else {
      isMounted.current = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
