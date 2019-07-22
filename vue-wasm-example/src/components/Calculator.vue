<template>
  <div class="hello">
    <h1>vue-wasm-example</h1>
    <div>
      <input type="number" v-model="a" />
      +
      <input type="number" v-model="b" />
      =
      {{sum}}
    </div>
    <p class="error" v-if="!ok">input must be i32</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import load from "../../../calculator/src/lib.rs";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      a: 0,
      b: 0,
      add: () => {}
    };
  },
  computed: {
    ok(): boolean {
      return this.isI32(this.a) && this.isI32(this.b);
    },
    sum(): number | string {
      if (this.ok) {
        return this.add(this.a, this.b);
      } else {
        return "???";
      }
    }
  },
  methods: {
    isI32(num: number): boolean {
      return Math.abs(num) < 2 ** 32 - 1;
    }
  },
  beforeCreate() {
    load().then((result: any) => {
      (this as any).add = result.instance.exports.add;
    });
  }
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  color: hotpink;
}
</style>
