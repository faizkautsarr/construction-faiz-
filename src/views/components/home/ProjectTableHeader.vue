<script setup lang="ts"></script>

<template>
  <a-row
    class="bg-gray-300 p-4 rounded-xl font-bold flex flex-row items-center mb-2"
    :gutter="[8, 8]"
  >
    <a-col :span="1" class="text-xxs">ID</a-col>
    <a-col :span="2" class="text-xxs">Creator</a-col>
    <a-col :span="3" class="text-xxs">Name</a-col>
    <a-col :span="4" class="text-xxs">Location</a-col>
    <a-col :span="2" class="text-xxs">Stage</a-col>
    <a-col :span="2" class="text-xxs">Category</a-col>
    <a-col :span="2" class="text-xxs">Other Category</a-col>
    <a-col :span="2" class="text-xxs">Start Date</a-col>
    <a-col :span="3" class="text-xxs">Detail</a-col>

    <a-col :span="3" class="text-xxs">Action</a-col>
  </a-row>
</template>
