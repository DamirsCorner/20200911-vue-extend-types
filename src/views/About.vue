<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div><a @click="goBack()">Back</a></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class extends Vue {
  goBack() {
    window.history.length > 0 ? this.$router.go(-1) : this.$router.push("/");
  }
}
</script>
