<script lang="ts">
    import { format as t } from "svelte-i18n";
    import NavButton from "./NavButton.svelte";
</script>

<nav class="navbar">
    <div class="nav-buttons">
        <NavButton title={$t("home")} />
        <NavButton title={$t("about")} />
        <NavButton title={$t("contact")} />
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: #0b7034; */
        background-color: hsla(120, 1%, 14%, 0.858);
        position: sticky;
        bottom: 0;
        min-width: 100vw;
        left: 0;
    }
    .nav-buttons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
