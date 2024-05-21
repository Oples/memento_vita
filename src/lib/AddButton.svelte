<script lang="ts">
    import MaterialSymbolsAdd from "~icons/material-symbols/add";
</script>

<button
    class="floating-button"
    on:click
    on:keypress
    on:keydown
    on:keyup
    on:mouseenter
    on:mouseleave
    on:focus
    on:blur
    {...$$restProps}
>
    <MaterialSymbolsAdd />
</button>

<style>
    .floating-button {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 1rem;
        bottom: 1rem;
        width: 3rem;
        height: 3rem;
        background-color: var(--ion-color-primary);
        border-radius: 50%;
        backdrop-filter: invert(0.25);
    }
</style>
