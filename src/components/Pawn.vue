<template>
    <div
		class="pawn">
	</div>
</template>

<script>
    export default {
        props: ['pawn'],

    }
</script>

<style lang="scss" scoped>
	.pawn{
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 50%;
		width: 75%;
		height: 75%;
	}
</style>