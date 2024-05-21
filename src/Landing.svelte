<script lang="ts">
    import { format as t } from "svelte-i18n";
    import Card from "./lib/Card.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import NavbarTop from "./lib/NavbarTop.svelte";
</script>

<div class="app-container">
    <NavbarTop />
    <main class="cards-grid">
        {#each { length: 16 } as _}
            <Card title={$t("example_card")} image="" />
        {/each}
        <!-- image="https://svelte.dev/svelte-logo-horizontal.svg" -->
    </main>
    <!-- <Navbar /> -->
</div>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(max(5rem, 30vw), 1fr));
        grid-gap: 1rem;
        padding: 1rem;
    }
</style>
