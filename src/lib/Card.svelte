<script lang="ts">
    export let title: string;
    export let image: string;
</script>

<div class:card={true} style:background-image={`url(${image})`}>
    <div>
        <h3>{title}</h3>
    </div>
</div>

<style>
    .card {
        position: relative;
        display: flex;
        align-items: baseline;
        justify-content: end;
        color: rgba(0, 0, 0, 0.55);
        opacity: 0.75;
        padding: 1rem;
        aspect-ratio: 3 /5;
        flex: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: rgb(80, 80, 80);
        border-radius: 0.5rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    }
    .card > div {
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        text-align: center;
    }
    .card > div > h3 {
        margin: 0;
        padding: 0;
    }
</style>
