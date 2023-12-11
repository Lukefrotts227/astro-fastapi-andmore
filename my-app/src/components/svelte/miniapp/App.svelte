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

<main class="w-1/2 h-full bg-orange-500" class:advanced={state === 'advanced'}>
    <h1 class="text-center text-3xl">Here is a {state} Svelte app</h1>
    <div class="flex items-center flex-col justify-center">
        <button class="text-center text-2xl p-3 m-5 text-black bg-gray-300 hover:bg-gray-500 font-extrabold rounded-md" on:click={toggleState}>{buttonText}</button>
        {#if state === 'advanced'}
            <p class="text-center font-bold text-xl">Welcome to the advanced state!</p>
        {/if}
    </div>
</main>
