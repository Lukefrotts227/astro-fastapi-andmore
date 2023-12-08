<script>
    let state = 'basic';
    let buttonText = 'Change State';

    function toggleState() {
        if (state === 'basic') {
            state = 'advanced';
            buttonText = 'Back to Basic';
        } else {
            state = 'basic';
            buttonText = 'Change State';
        }
    }
</script>

<style>
    .advanced {
        background-color: blue;
        color: white;
    }
</style>

<main class="min-h-screen bg-orange-500" class:advanced={state === 'advanced'}>
    <h1>Here is a {state} Svelte app</h1>
    <button on:click={toggleState}>{buttonText}</button>
    {#if state === 'advanced'}
        <p>Welcome to the advanced state!</p>
    {/if}
</main>
