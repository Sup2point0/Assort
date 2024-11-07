<!-- @component CornerNotices -->

<script>

import { popups } from "#modules/stores";

import Notice from "#parts/popups/notice.corner.svelte";

</script>


<div class="notices">

{#if $popups.data == false}
  <Notice store:bind={$popups.data}
    title="Welcome to Assort!"
  >
    This site doesn’t use cookies or analytics of any kind, but it does store your preferences in `localStorage`. See <a href="{base}/privacy">Privacy</a> for more. Enjoy <em>Assort</em>!
  </Notice>
{/if}

{#if $popups.data == true && $popups.dev == false}
  <Notice store:bind={$popups.dev}
    title="Under Development"
  >
    ...
  </Notice>
{/if}

</div>


<style lang="scss">

.notices {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}

</style>
