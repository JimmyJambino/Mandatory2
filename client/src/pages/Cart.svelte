<script>
    import {cart} from "../store/writeableStore.js"
    import BeerTable from "../components/Table/BeerTable.svelte"

</script>

<h1>Items in your cart</h1>
<BeerTable isShop={false} beers={$cart}/>