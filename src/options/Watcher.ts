import * as type from '../../index'

export default interface WatcherOptions {

  // 是否立即执行一次 watcher，默认为 false
  immediate?: boolean

  // 是否同步监听变化，默认为 false
  sync?: boolean

  // 是否只监听一次，默认为 false
  once?: boolean

  // 数据变化处理器
  watcher?: type.watcher

}