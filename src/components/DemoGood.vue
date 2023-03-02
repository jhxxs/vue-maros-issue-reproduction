<template>
  <div class="box">
    <p>没有defineModel，跳转到定义可以正常运行</p>
    {{ value }}

    <p>
      <!-- F12 可以正常跳转 -->
      {{ a }}, {{ b }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { b } from "@/utils"

const props = withDefaults(
  defineProps<{
    /** 显示值 */
    value?: string
  }>(),
  {
    // 这里设置默认 prop 时会失去自动提示
    value: "demo good"
  }
)

/** 变量 a */
const a = 1

console.log(props.value)
</script>
