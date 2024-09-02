<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import {companyList} from "$lib/data/data";

    let searchTerm = '';
    $: filteredItems = companyList.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    function goDetail(item:any){
        goto(`/details/${item.id}`);
    }
</script>

<TableSearch placeholder="Search by company name" hoverable={true} bind:inputValue={searchTerm}>
    <TableHead>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Maker</TableHeadCell>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Make</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each filteredItems as item}
            <TableBodyRow class="cursor-pointer" onclick={() =>goDetail(item)}>
                <TableBodyCell>{item.id}</TableBodyCell>
                <TableBodyCell>{item.maker}</TableBodyCell>
                <TableBodyCell>{item.type}</TableBodyCell>
                <TableBodyCell>{item.make}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</TableSearch>