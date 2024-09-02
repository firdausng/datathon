<script lang="ts">
    import { utils, read } from 'xlsx';
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        TableSearch
    } from "flowbite-svelte";
    import {companyList} from "$lib/data/data";
    import {goto} from "$app/navigation";

    function goDetail(item:any){
        console.log(item);
        goto(`/details/${item.Company}`);
    }

    let abc: any = [];

    // Function to handle file input change
    const handleFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                console.log(json); // Process the JSON data as required
                abc = json;
            };
            reader.readAsArrayBuffer(file);
        }
    };

</script>

<div class="flex flex-col gap-3 ">
    <div>
        <input type="file" accept=".xlsx, .xls" on:change={handleFileChange} class="rounded"/>
    </div>


    <div>
        {#if abc.length > 0}
            <Table>
                <TableHead>
                    {#each Object.keys(abc[0]) as header}
                        <TableHeadCell>{header}</TableHeadCell>
                    {/each}
                </TableHead>
                <TableBody tableBodyClass="divide-y">
                    {#each abc as item}
                        <TableBodyRow class="cursor-pointer" onclick={() =>goDetail(item)}>
                            {#each Object.keys(item) as header}
                                <TableBodyCell>{item[header]}</TableBodyCell>
                            {/each}
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
        {/if}
    </div>

</div>

