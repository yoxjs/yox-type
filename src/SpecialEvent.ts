import CustomEvent from 'yox-common/util/Event'

export default interface SpecialEvent {
  on: (node: HTMLElement, listener: (event: Event | CustomEvent) => void) => void,
  off: (node: HTMLElement, listener: (event: Event | CustomEvent) => void) => void,
}