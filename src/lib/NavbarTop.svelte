<script lang="ts">
    import { format as t } from "svelte-i18n";
    import NavButton from "./NavButton.svelte";
    import MaterialSymbolsMenuRounded from "~icons/material-symbols/menu-rounded";
    import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";
    import { Route, Router, navigate } from "svelte-routing";
    import { statusbar } from "../lib/store/statusbar";
</script>

<nav class="navbar">
    <div class="nav-buttons">
        <Router>
            <Route path="/*">
                <NavButton
                    title={$t("")}
                    on:click={() => history.back()}
                    style="width: 3rem;"
                >
                    <MaterialSymbolsArrowBackRounded />
                </NavButton>
                <span>{$statusbar.text}</span>
                <div style="aspect-ratio: 1; width: 3rem;"></div>
            </Route>
            <Route path="/">
                <div style="aspect-ratio: 1; width: 3rem;"></div>
                <span>{$statusbar.text}</span>
                <NavButton
                    style="width: 3rem;"
                    title={$t("settings")}
                    on:click={() => navigate("/settings")}
                >
                    <MaterialSymbolsMenuRounded />
                </NavButton>
            </Route>
        </Router>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: #0b7034; */
        position: sticky;
        bottom: 0;
        min-width: 100%;
        left: 0;
        height: 3rem;
    }
    .nav-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 500px) {
    }
</style>
