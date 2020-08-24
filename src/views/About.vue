<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div><a @click="goBack()">Back</a></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  created(this: About) {
    this.span = this.$apm.startSpan("create-mount-duration", "custom");
  },
  mounted(this: About) {
    this.span?.end();
  },
})
export default class About extends Vue {
  span?: Span;
  goBack() {
    window.history.length > 0 ? this.$router.go(-1) : this.$router.push("/");
  }
}
</script>
