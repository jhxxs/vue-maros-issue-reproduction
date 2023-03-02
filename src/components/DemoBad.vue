<template>
  <div class="box">
    <p>有defineModel</p>
    {{ value }}
    <p>
      <!-- 'cmd + 鼠标左键'没有光标没有变✋🏻，而且也无法跳转， F12也是  -->
      {{ a }}, {{ b }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { b } from "@/utils"

const { value } = defineModel<{
  /** 显示值 */
  value?: string
}>()

/** 变量 a */
const a = 1
</script>
