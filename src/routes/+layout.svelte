<script>
    import "../app.css";
    import Navbar from "$lib/ui/navbar.svelte";
</script>

<div class="container mx-auto text-primary-500 px-4 md:px-2">
    <Navbar />
    <slot />
</div>
