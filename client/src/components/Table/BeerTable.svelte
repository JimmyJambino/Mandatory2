<script>
    import TableRow from "./TableRow.svelte"
    export let isShop = true
    export let beers = [
    ]    
</script>

<table>
    <TableRow/>
    <TableRow isTableHead={false} isShop={isShop} beers={beers}/>
</table>

<style>
    table {
        border: 2px;
		border-color: black;
		border-style: solid;
        border-spacing: 3em;
    }
</style>