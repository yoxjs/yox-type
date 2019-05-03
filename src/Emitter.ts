import * as type from '../index'

import EmitterOptions from './options/Emitter'

export default interface Emitter {

  ns: boolean

  listeners: Record<string, EmitterOptions[]>

  nativeListeners?: Record<string, type.nativeListener>

  fire(
    type: string,
    data: any[] | void,
    filter?: (type: string, data: any[] | void, options: EmitterOptions) => boolean | void
  ): boolean

  has(
    type: string,
    listener?: Function | EmitterOptions
  ): boolean

  on(
    type: string | Record<string, Function | EmitterOptions>,
    listener?: Function | EmitterOptions,
    extra?: EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Function | EmitterOptions
  ): void

}