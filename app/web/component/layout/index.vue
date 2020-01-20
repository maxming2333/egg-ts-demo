<template>
  <html v-if="isNode">
    <head>
      <title>{{title}}</title>
      <meta name="keywords" :content="keywords">
      <meta name="description" :content="description">
      <meta http-equiv="content-type" content="text/html;charset=utf-8">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </head>
    <body server-render="true">
      <div id="app" class="bb">
        <main-layout>
          <slot></slot>
        </main-layout>
      </div>    
    </body>
  </html>
  <div v-else-if="!isNode" id="app" class="cc">
    <main-layout>
      <slot></slot>
    </main-layout>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
