<script lang="ts">
    console.log("NavButton", $$restProps);
</script>

<button class="nav-button" on:click {...$$restProps}>
    <slot />
</button>

<style>
    .nav-button {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.75;
        line-height: 0;
        aspect-ratio: 1;
        font-size: 1.85rem;
        outline: 0;
        border: none;
        fill: inherit;
        color: inherit;
        background-color: inherit;
        background-color: transparent;
    }
</style>
