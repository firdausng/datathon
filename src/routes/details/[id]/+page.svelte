<script>
    import { Timeline, TimelineItem, Button, Modal, Label, Input, Textarea  } from 'flowbite-svelte';
    import { CalendarWeekSolid } from 'flowbite-svelte-icons';
    import { superForm } from 'sveltekit-superforms';
    import SuperDebug from 'sveltekit-superforms';

    export let data;

    const { form } = superForm(data.form);

    let logs = [
        {
            title: 'company summoned again',
            log: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at bibendum nisl. Pellentesque in lacinia ex, sit amet ornare lorem. Curabitur augue elit, laoreet eget ullamcorper non, vehicula at elit. Quisque mattis nisl et nisl commodo, non egestas nunc interdum. Fusce non enim at felis auctor sodales feugiat vitae ipsum. Vestibulum ornare nulla at lectus rhoncus, finibus rutrum ipsum viverra. Suspendisse ac orci tempus, fermentum metus ac, condimentum odio. Phasellus ornare viverra arcu sit amet interdum. Morbi aliquet in enim id varius. Suspendisse potenti.',
            date: 'January 13th, 2022',
            author: 'firdaus'
        },
        {
            title: 'company summoned second',
            log: 'Duis tristique bibendum ante eu auctor. Proin tristique sed sem in accumsan. Aenean convallis egestas dui, et tempus justo imperdiet non. Sed sollicitudin pellentesque diam in maximus. Vivamus quis purus at purus feugiat tempus a vel nulla. Cras dapibus finibus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sed scelerisque purus, et volutpat sapien. Duis sollicitudin consectetur quam, sed rutrum diam tempus pulvinar. Aliquam gravida semper turpis, vel condimentum lectus pretium a. Nunc pretium tellus vel lacinia mattis. Maecenas felis dolor, hendrerit nec erat id, dapibus pellentesque neque. Donec ultricies suscipit mi id placerat. Sed sit amet bibendum diam. Phasellus euismod sodales rutrum.',
            date: 'December 7th, 2021',
            author: 'izzat'
        },
        {
            title: 'company summoned first',
            log: 'Duis tristique bibendum ante eu auctor. Proin tristique sed sem in accumsan. Aenean convallis egestas dui, et tempus justo imperdiet non. Sed sollicitudin pellentesque diam in maximus. Vivamus quis purus at purus feugiat tempus a vel nulla. Cras dapibus finibus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sed scelerisque purus, et volutpat sapien. Duis sollicitudin consectetur quam, sed rutrum diam tempus pulvinar. Aliquam gravida semper turpis, vel condimentum lectus pretium a. Nunc pretium tellus vel lacinia mattis. Maecenas felis dolor, hendrerit nec erat id, dapibus pellentesque neque. Donec ultricies suscipit mi id placerat. Sed sit amet bibendum diam. Phasellus euismod sodales rutrum.',
            date: 'October 7th, 2021',
            author: 'izzat'
        }
    ];

    let formModal = false;

</script>

<div class="flex flex-col gap-3">
    <header class="flex flex-col gap-3 items-center">
        <h1 class="font-semibold uppercase text-2xl">Company 1</h1>
        <button class="bg-primary-500 text-primary-50 py-2 px-4 rounded-xl" onclick={() => (formModal = true)}>Add Log</button>
    </header>

    <Timeline order="vertical">
        {#each logs as timelineItems}
            <TimelineItem title={timelineItems.title} date={`${timelineItems.date} by ${timelineItems.author}`} >
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
                </svelte:fragment>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{timelineItems.log}</p>
            </TimelineItem>
        {/each}
    </Timeline>
</div>



<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <SuperDebug data={$form} />
    <form class="flex flex-col space-y-6" method="POST">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add log</h3>
        <Label class="space-y-2">
            <span>Title</span>
            <Input type="text" name="title" placeholder="Title" required bind:value={$form.title}/>
        </Label>
<!--        <Label class="space-y-2">-->
<!--            <span>Log</span>-->
<!--            <Input type="text" name="log" placeholder="log" required />-->
<!--        </Label>-->

        <Label for="log" class="mb-2">Logs</Label>
        <Textarea id="log" placeholder="Your log" rows="4" name="log" bind:value={$form.log}/>

        <Label class="space-y-2">
            <span>Author</span>
            <Input type="text" name="author" placeholder="Author" required bind:value={$form.author}/>
        </Label>
<!--        <Label class="space-y-2">-->
<!--            <span>date</span>-->
<!--            <Input type="text" name="date" placeholder="date" required />-->
<!--        </Label>-->
<!--        <div class="flex items-start">-->
<!--            <Checkbox>Remember me</Checkbox>-->
<!--            <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>-->
<!--        </div>-->
        <Button type="submit" class="w-full1">Submit</Button>
    </form>
</Modal>