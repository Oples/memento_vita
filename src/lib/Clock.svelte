<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { format as t } from "svelte-i18n";

    let time = new Date().toLocaleTimeString();
    let timeInterval: number;

    onMount(() => {
        timeInterval = setInterval(() => {
            time = new Date().toLocaleTimeString();
        }, 100);
    });

    onDestroy(() => {
        clearInterval(timeInterval);
    });
</script>

<span class="clock">
    {time}
</span>

<style>
    .clock {
        font-family: "DSEG7", monospace;
    }
</style>
