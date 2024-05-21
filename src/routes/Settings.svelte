<script lang="ts">
    import { navigate } from "svelte-routing";
    import { format as t } from "svelte-i18n";
    // fullscreen
    import MaterialSymbolsFullscreen from "~icons/material-symbols/fullscreen";
    // Reset
    import MaterialSymbolsRestartAlt from "~icons/material-symbols/restart-alt";
    import { onMount } from "svelte";
    import { statusbar } from "../lib/store/statusbar";

    function toggle_fullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    function reset() {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }

    onMount(() => {
        $statusbar.text = $t("settings");
    });
</script>

<main>
    <p>{$t("coming_soon")}</p>
    <div class="options">
        <span>{$t("fullscreen")}</span>
        <button on:click={toggle_fullscreen}>
            <MaterialSymbolsFullscreen />
        </button>
        <span>{$t("reset")}</span>
        <button style="background-color: red" on:click={reset}>
            <MaterialSymbolsRestartAlt />
        </button>
    </div>
</main>

<style>
    .options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;

        & button {
            border: none;
            background-color: rgba(0, 120, 0, 0.1);
            line-height: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            color: inherit;
            border-radius: 0.25rem;
        }
    }
</style>
