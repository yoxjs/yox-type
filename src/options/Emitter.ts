export default interface EmitterOptions {

  // 监听函数
  fn?: Function

  // 执行监听函数的上下文对象
  ctx?: any

  // 监听函数已执行次数
  num?: number

  // 监听函数的最大可执行次数
  max?: number

  // 所在的命名空间
  ns?: string

  // 计数器，用于扩展，随便做什么计数都行
  count?: number

}