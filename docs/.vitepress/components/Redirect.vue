<!-- .vitepress/theme/components/Redirect.vue -->
<script setup>
import { useData } from 'vitepress';
const { site } = useData();

if (typeof window !== 'undefined') {
  // 检查当前域名是否是 wangkaixin.net.cn
  if (window.location.hostname === 'wangkaixin.net.cn') {
    // 如果是根路径，跳转到 /zh-CN/
    if (window.location.pathname === '/') {
      window.location.href = '/zh-CN/';
    }
  }
}
</script>

<template>
  <!-- 空组件，仅用于逻辑处理 -->
</template>