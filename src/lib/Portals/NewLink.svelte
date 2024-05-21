<script lang="ts">
    import { Builder } from "builder-pattern";
    import { createEventDispatcher } from "svelte";
    import Portal from "svelte-portal";
    import type { Link } from "../store/model";

    export let visible = true;

    const dispatch = createEventDispatcher();

    const close = () => dispatch("close");
    const create = () =>
        dispatch("create", Builder<Link>().name("example").build());

    interface $$Events {
        close: CustomEvent<never>;
        create: CustomEvent<Link>;
    }
</script>

<Portal target="body">
    {#if visible}
        <div class="portal">
            <div class="portal-content">
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                </form>
                <button on:click={close}>Cancel</button>
                <button on:click={create}>Create</button>
            </div>
        </div>
    {/if}
</Portal>

<style>
    .portal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: env(safe-area-inset-top);
        padding-right: env(safe-area-inset-right);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
    }
    .portal-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
    }
</style>
