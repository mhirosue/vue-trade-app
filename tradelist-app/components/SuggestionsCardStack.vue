<template>
	<div class="cards">
		<SuggestionsCard
			v-for="(card, index) in cards"
			:key="card"
			:card="card"
			:is-current="index === 0"
			@cardAccepted="$emit('cardAccepted');"
			@cardRejected="$emit('cardRejected');"
			@cardSkipped="$emit('cardSkipped');"
			@hideCard="$emit('hideCard');"
		/>
	</div>
</template>

<script>
	import SuggestionsCard from "~/components/SuggestionsCard";
	
	export default {
		components: {
			SuggestionsCard
		},
		
		props: {
			cards: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cards {
		position: relative;
		display: flex;
		margin: 50px;
		width: 300px;
	}
</style>
