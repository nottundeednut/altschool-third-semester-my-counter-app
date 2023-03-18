import { ref } from 'vue';

export default function useCounterLogic() {
    const count = ref(0)
    const customInput = ref("")

    const increment = () => {
        count.value++
    }
    const decrement = () => {
        count.value--
    }
    const setValue = (event) => {
        customInput.value = event.target.value
    }
    const customIncrement = () => {
        count.value = count.value + parseInt(customInput.value)
    }
    const customDecrement = () => {
        count.value = count.value - parseInt(customInput.value)
    }
    const reset = () => {
        count.value = 0
        customInput.value = ""
        clearInput()
    }
    const clearInput = () => {
        document.getElementById("clearInput").value = ""
    }

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
}