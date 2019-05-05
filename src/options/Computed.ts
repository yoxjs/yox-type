import * as type from '../type'

export default interface ComputedOptions {

  // 是否开启缓存，默认为 true
  cache?: boolean

  // 是否同步监听变化，默认为 true
  sync?: boolean

  // 写死依赖，从而跳过依赖自动收集
  deps?: string[]

  // setter
  set?: type.computedSetter

  // getter，必填
  get: type.computedGetter

}