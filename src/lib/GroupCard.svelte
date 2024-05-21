<script lang="ts">
    import { colord } from "colord";
    import { Link } from "svelte-routing";
    import type { Group } from "./store/model";
    import { model } from "./store/model";

    export let id: string;
    let group: Group = $model.model.list.find((g) => g.id == id) as Group;
    export let title: string;
    export let image: string;

    // a random color or something defined by the user
    export let color: string = "#" + Math.random().toString(16).slice(2, 8);
    let text_color = colord(color).isDark() ? "white" : "black";
</script>

<Link to="/card/{id}">
    <div
        style:background-image={`url(${image})`}
        style:background-color={color}
        style:color={text_color}
        class="card"
    >
        <div class="card-text">
            <span>{title}</span>
        </div>
    </div>
</Link>

<style>
    .card {
        position: relative;
        display: flex;
        align-items: baseline;
        justify-content: end;
        opacity: 0.9;
        aspect-ratio: 3 / 4;
        flex: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: rgb(80, 80, 80);
        border-radius: 0.25rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    }
    .card-text {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        width: 100%;
        text-shadow: 0 0 0.5rem var(--ion-color-primary);
        text-align: center;
        font-weight: bold;
    }
    .card-text > span {
        display: block;
        padding: 0.5rem;
        font-size: 1.25rem;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
