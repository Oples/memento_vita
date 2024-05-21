<script lang="ts">
    export let title: string;
</script>

<div class="nav-button">
    <span>{title}</span>
</div>

<style>
    .nav-button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.55);
        opacity: 0.75;
        line-height: 1;
        aspect-ratio: 1;
    }
</style>
