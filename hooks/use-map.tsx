import { useMemo, useState } from 'react'

type MapActions<K, V> = {
	set: (key: K, value: V) => void
	remove: (key: K) => void
	clear: () => void
}

export const useMap = <K, V>(initialValue: [K, V][]): [Map<K, V>, MapActions<K, V>] => {
	const [map, setMap] = useState<Map<K, V>>(new Map(initialValue))

	const actions = useMemo(
		() => ({
			set: (key: K, value: V) =>
				setMap((prevMap) => {
					const nextMap = new Map(prevMap)
					nextMap.set(key, value)
					return nextMap
				}),
			remove: (key: K) =>
				setMap((prevMap) => {
					const nextMap = new Map(prevMap)
					nextMap.delete(key)
					return nextMap
				}),
			clear: () => setMap(new Map()),
		}),
		[setMap]
	)

	return [map, actions]
}
