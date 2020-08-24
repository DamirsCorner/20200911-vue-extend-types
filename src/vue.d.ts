import { ApmBase } from "@elastic/apm-rum";

declare module "vue/types/vue" {
  interface Vue {
    readonly $apm: ApmBase;
  }
}
