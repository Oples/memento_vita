<script lang="ts">
    import { format as t } from "svelte-i18n";
    import GroupCard from "./lib/GroupCard.svelte";
    // import NavbarBottom from "./lib/NavbarBottom.svelte";
    import NavbarTop from "./lib/NavbarTop.svelte";
    import { Router, Route } from "svelte-routing";
    import GroupCardDetail from "./routes/GroupCardDetail.svelte";
    import Settings from "./routes/Settings.svelte";
    import Clock from "./lib/Clock.svelte";
    import { onMount } from "svelte";
    import CardGrid from "./routes/CardGrid.svelte";

    // check if the user is on mobile and has safe area
    let safeArea = false;
    let checkInterval = 0;

    onMount(() => {
        checkInterval = setInterval(() => {
            safeArea = !!(
                window.matchMedia("(display-mode: standalone)").matches &&
                document.fullscreenElement
            );
        }, 1000);
    });
</script>

<div class="app-container">
    <div class="app">
        <div class="safe-area-info">
            {#if safeArea}
                <div class="status-bar">
                    <Clock />
                </div>
            {/if}
        </div>
        <NavbarTop />
        <div class="app-content">
            <Router>
                <Route path="/">
                    <CardGrid />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/card/:group_id" let:params>
                    <GroupCardDetail id={params.group_id} />
                </Route>
            </Router>
            <!-- <NavbarBottom /> -->
        </div>
    </div>
</div>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        max-width: 80rem;
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
    .app {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem;
        overflow: auto;
    }
    .app-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: auto;
    }
    .safe-area-info {
        height: var(--ion-safe-area-top, 0px);
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
    }
    .status-bar {
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 1rem;
        flex: 1;
    }
    @media (max-width: 500px) {
        .app {
            gap: 0.5rem;
        }
    }
</style>
