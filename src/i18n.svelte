<script lang="ts">
    import {
        init,
        register,
        getLocaleFromNavigator,
        isLoading,
    } from "svelte-i18n";

    const defaultLocale = "en";

    register("en", () => import("./locales/en.json"));

    init({
        fallbackLocale: defaultLocale,
        initialLocale: getLocaleFromNavigator(),
    });
</script>

{#if $isLoading}
    <div class="loading">
        <div class="loading-spinner"></div>
    </div>
{:else}
    <slot />
{/if}

<style>
    .loading {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid #ccc;
        border-top-color: #0b7034;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
