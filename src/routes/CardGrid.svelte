<script>
    import { onMount } from "svelte";
    import GroupCard from "../lib/GroupCard.svelte";
    import { model } from "../lib/store/model";
    import { format as t } from "svelte-i18n";
    import { statusbar } from "../lib/store/statusbar";

    onMount(() => {
        $statusbar.text = $t("cards_grid");
    });
</script>

<main class="cards-grid">
    {#each $model.model.list as group, i}
        <GroupCard
            id={group.id}
            title={group.name || $t("example_card")}
            image={group.image}
            color={group.color || "#ffffff"}
        />
    {/each}
    <!-- image="https://svelte.dev/svelte-logo-horizontal.svg" -->
</main>

<style>
    .cards-grid {
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(max(5rem, min(30%, 8rem)), 1fr)
        );
        grid-gap: 1rem;
        gap: 1rem;
    }
    @media (max-width: 500px) {
        .cards-grid {
            grid-gap: 0.5rem;
            gap: 0.5rem;
        }
    }
</style>
