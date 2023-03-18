<template>
    <div class="card">
        <h1>COUNTS: {{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>

        <h3>Custom Interval</h3>
        <input type="text" placeholder="Enter Interval Value" @change="setValue" id="clearInput" />
        <br />
        <button @click="customIncrement"> Custom Increment </button>
        <button @click="customDecrement"> Custom Decrement </button>
        <br />

        <button @click="reset">Reset All</button>
    </div>
</template>

<script>
import useCounterLogic from '@/composables/useCounterLogic';

export default {
    name: 'Counter',
    setup() {
        const { count, customInput, increment, decrement, setValue, customIncrement, customDecrement, clearInput, reset } = useCounterLogic();

        return {
            count,
            customInput,
            increment,
            decrement,
            setValue,
            customIncrement,
            customDecrement,
            clearInput,
            reset
        }
    },
}
</script>
<style scoped>
.card{
    display: block;
}
</style>
  