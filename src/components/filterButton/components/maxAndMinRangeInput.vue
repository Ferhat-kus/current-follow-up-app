<template>
    <div>
        <input :placeholder="placeholder" class="border-2 px-2 py-2.5 text-sm placeholder:text-sm placeholder:text-darkBlue outline-none rounded-md border-darkBlue w-full" type="text">
    </div>
</template>

<script>
    export default {
        props:['placeholder']
    }
</script>