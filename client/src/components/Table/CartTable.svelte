<script>
    import TableRow from "./TableRow.svelte"
    export let isShop = true
    export let beers = [
    ]    
</script>
<div class="container">
    <table>
        <TableRow isTableHead={false} isShop={isShop} beers={beers}/>
    </table>
    <div>
        Total price: 
    </div>
</div>


<style>
    table {
        border: 2px;
		border-color: black;
		border-style: solid;
        border-spacing: 3em;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
</style>