# Button

基本按钮组件

## 基本使用

通过 `type` 设置按钮类型, `plain` 设置朴素按钮

::: demo 

```vue
<template>
  <div>
    <kun-button>默认按钮</kun-button>
    <kun-button type="primary">主要按钮</kun-button>
    <kun-button type="success">成功按钮</kun-button>
    <kun-button type="warn">警告按钮</kun-button>
    <kun-button type="error">错误按钮</kun-button>
  </div> 

  <div>
    <kun-button plain>默认按钮</kun-button>
    <kun-button type="primary" plain>主要按钮</kun-button>
    <kun-button type="success" plain>成功按钮</kun-button>
    <kun-button type="warn" plain>警告按钮</kun-button>
    <kun-button type="error" plain>错误按钮</kun-button>
  </div> 

  <div>
    <kun-button round>默认按钮</kun-button>
    <kun-button type="primary" round>主要按钮</kun-button>
    <kun-button type="success" round>成功按钮</kun-button>
    <kun-button type="warn" round>警告按钮</kun-button>
    <kun-button type="error" round>错误按钮</kun-button>
  </div> 
</template>
```

:::

## 按钮大小

通过 `size` 设置按钮大小

::: demo
```vue
<template>
  <div>
    <kun-button type="primary" size="small">小号按钮</kun-button>
    <kun-button type="primary">中号按钮</kun-button>
    <kun-button type="primary" size="large">大号按钮</kun-button>
  </div> 
</template>
```
:::

## 图标按钮

通过 `icon` 属性设置图标
::: demo
```vue
<template>
  <div>
    <kun-button type="primary" icon="search" plain>搜索</kun-button>
    <kun-button type="primary" icon="search" round></kun-button>
  </div> 
</template>
```
:::

## Button Attributes

| 参数          | 说明               | 类型            | 可选值                                           | 默认值  |
| ------------- | ----------------- | --------------- | ------------------------------------------------ | ------- |
| `type`  | 按钮类型   | string  | `default`, `success`, `warn`, `primary`, `error` | default |
| `size`  | 按钮大小 | string | `small`, `medium`, `large` | medium |
| `plain` | 是否朴素按钮 | boolean | - | false |
| `round` | 是否圆角按钮 | boolean | - | false |
| `icon` | 图标类型 | string | - | '' |

## Events

| 事件名称    | 说明               |
| ----------- | ------------------ |
| `click` | 按钮点击 |
