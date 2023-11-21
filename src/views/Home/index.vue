<template>
  <el-scrollbar height="100%">
    <Swiper></Swiper>
    <el-divider></el-divider>
    <SwiperCard></SwiperCard>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Swiper from './components/TheSwiper.vue'
import SwiperCard from './components/TheSwiperCard.vue'
</script>

<style lang="less" scoped></style>