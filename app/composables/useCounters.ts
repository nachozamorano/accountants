import { computed } from 'vue'


export function useCounters() {
    const counters = useState('counters', () => [] as Array<{ id: string; name: string; value: number }>)
    function generateId() { return String(Date.now()) + Math.floor(Math.random() * 10000) }
    function addCounter(name: string) { if (!name?.trim()) return; counters.value.push({ id: generateId(), name: name.trim(), value: 0 }) }
    function removeCounter(id: string) { counters.value = counters.value.filter(c => c.id !== id) }
    function increment(id: string) { const c = counters.value.find(x => x.id === id); if (c) c.value++ }
    function decrement(id: string) { const c = counters.value.find(x => x.id === id); if (c) c.value-- }
    const totalSum = computed(() => counters.value.reduce((s, c) => s + c.value, 0))
    return { counters, addCounter, removeCounter, increment, decrement, totalSum }
}