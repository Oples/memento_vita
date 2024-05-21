<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import LinkRow from "../lib/LinkRow.svelte";
    import { defaultTheme, theme } from "../lib/store/theme";
    import { colord } from "colord";
    import { add_link, model, type Group, type Link } from "../lib/store/model";
    import { format as t } from "svelte-i18n";
    import { statusbar } from "../lib/store/statusbar";
    import AddButton from "../lib/AddButton.svelte";
    import NewLink from "../lib/Portals/NewLink.svelte";

    export let id: string;

    let group: Group = $model.model.list.find((g) => g.id == id) as Group;

    $: group = $model.model.list.find((g) => g.id == id) as Group;

    let title: string = group.name || $t("example_card");
    let image: string = group.image;
    let color: string = group.color || "#ffffff";
    let text_color = colord(color).isDark() ? "white" : "black";
    let new_link_window_open = false;

    function on_create(link: CustomEvent<Link>) {
        new_link_window_open = false;
        add_link(group.id, link.detail);
    }

    onMount(() => {
        theme.set({
            background_color: color,
            text_color: text_color,
        });
        $statusbar.text = group.name || $t("example_card");
    });

    onDestroy(() => {
        theme.set({
            background_color: defaultTheme.background_color,
            text_color: defaultTheme.text_color,
        });
    });
</script>

<div class="card-detail">
    {#if new_link_window_open}
        <NewLink
            on:close={() => (new_link_window_open = false)}
            on:create={on_create}
        />
    {/if}
    <div class="link-table">
        {#each group.links as link, i}
            <LinkRow id={i} title={link.name} image={link.image} />
        {/each}
    </div>
    <AddButton on:click={() => (new_link_window_open = true)} />
</div>

<style>
    .card-detail {
        display: flex;
        flex-direction: column;
        /* padding: 1rem; */
        flex: 1;
        width: 100%;
        height: 100%;
    }
    .link-table {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    @media (max-width: 500px) {
        .card-detail {
            gap: 0.5rem;
        }
    }
</style>
