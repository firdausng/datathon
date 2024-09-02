<script>
    import "../app.css";
    import Navbar from "$lib/ui/navbar.svelte";
</script>

<div class="container mx-auto text-primary-500">
    <Navbar />
    <slot />
</div>
