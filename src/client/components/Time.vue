<template>
  <div>
    Time: {{ $store.state.time }}
    <button @click="setTime">update</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["setTime"]),
};
</script>
