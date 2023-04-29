import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

function useEffectOnUpdate(effect: EffectCallback, deps?: DependencyList) {
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

export default useEffectOnUpdate
