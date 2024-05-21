<script lang="ts">
    export let id: number;
    export let title: string;
    export let image: string = "";

    // Link
    import Link from "~icons/material-symbols/open-in-new-rounded";
    // Options
    import Options from "~icons/material-symbols/settings-outline";
</script>

<div class="link-row">
    {#if image}
        <img src={image} alt={title} />
    {/if}
    <span style="flex: 1; text-align: start">{title}</span>
    <div style="display: flex; gap: 0.5rem; align-items: center;">
        <button class="btn">
            <Link />
        </button>
        <button class="btn">
            <Options />
        </button>
    </div>
</div>

<style>
    .link-row {
        display: flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        gap: 0.5rem;
        border-radius: 0.15rem;
        background-color: hsla(120, 1%, 14%, 0.299);
    }

    button {
        border: none;
        background-color: inherit;
        line-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        color: inherit;
        border-radius: 0.25rem;
    }
    .btn {
        backdrop-filter: invert(0.25);
    }
</style>
