<script>
    import TableHead from "./TableHead.svelte"
    import {cart} from "../../store/writeableStore.js"
    function addToCart(beer) {
        cart.update(n => [...n, beer])
    }
    export let isTableHead = true
    export let isShop
    export let beers = [
    ]
</script>


<tr>
    <TableHead/>
</tr>
{#each beers as beer}
<tr>
    <td>{beer.name}</td>
    <td>{beer.amount} in stock</td>
    <td>{beer.price} DKK</td>
    <td><img src={beer.imgURL} alt="image"></td>
    <!-- <td><button on:click={addToCart(beer)}>Remove from cart</button></td> -->
</tr>
{/each}
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