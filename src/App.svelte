<script lang="ts">
    import I18n from "./i18n.svelte";
    import Landing from "./Landing.svelte";
    import "./app.css";
    import { theme } from "./lib/store/theme";
    import {
        Group,
        add_group,
        add_link,
        model,
        remove_group,
        remove_link,
        update_group,
        update_link,
    } from "./lib/store/model";
    import { onMount } from "svelte";
    import { Builder } from "builder-pattern";

    onMount(() => {
        //     // model.set(loadModel());
        window.Model = {
            model: $model.model,
            add_group,
            update_group,
            remove_group,
            add_link,
            update_link,
            remove_link,
        };
        window.Group = Group;

        add_group(
            Builder(Group)
                .name("example_card1")
                .description("example card1")
                .build(),
        );
        add_group(
            Builder(Group)
                .name("example_card2")
                .description("example card2")
                .build(),
        );
        add_group(
            Builder(Group)
                .name("example_card3")
                .description("example card3")
                .build(),
        );
    });
</script>

<div
    style:background-color={$theme.background_color}
    style:color={$theme.text_color}
    class="root"
>
    <I18n>
        <Landing />
    </I18n>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        flex: 1;
        /* width: 100vw;
        height: 100vh; */
        padding-top: var(--ion-safe-area-top);
        padding-right: var(--ion-safe-area-right);
        padding-bottom: var(--ion-safe-area-bottom);
        padding-left: var(--ion-safe-area-left);
    }
</style>
