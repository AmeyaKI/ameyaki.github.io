import { PLACEHOLDER_CARD_COUNT } from '../constants'
import type { WorkCard } from '../types'

export function getCardSlots(items: WorkCard[]): (WorkCard | null)[] {
  const slots: (WorkCard | null)[] = items.map((item) => item)
  while (slots.length < PLACEHOLDER_CARD_COUNT) {
    slots.push(null)
  }
  return slots.slice(0, PLACEHOLDER_CARD_COUNT)
}
