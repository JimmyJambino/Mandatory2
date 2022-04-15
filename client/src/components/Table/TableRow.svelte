<script>
    import TableHead from "./TableHead.svelte"
    export let isTableHead = true
    export let beers = [
    ]
</script>

{#if isTableHead}
<tr>
<TableHead/>
</tr>
{:else}
{#each beers as beer}
<tr>
<td>{beer.name}</td>
<td>{beer.amount} in stock</td>
<td>{beer.price} DKK</td>
<td><img src={beer.imgURL} alt="image"></td>
<td><button>Add to cart</button></td>
</tr>
{/each}
{/if}
<style>    
    tr {
		border: 1px;
        border-color: black;
		border-style: solid;
        border-spacing: 3em;
	}
    td {
        border: 1px;
        border-color: white;
		border-style: solid;
        border-spacing: 3em;
    }
    img {
        width: 4em;
        height: 5em;
    }
</style>