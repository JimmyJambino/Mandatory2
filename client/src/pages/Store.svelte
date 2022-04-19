<script>
    import BeerTable from "../components/Table/BeerTable.svelte"
    import {Router, Link} from "svelte-navigator"
    import {cart} from "../store/writeableStore.js"
    import {beers} from "../store/writeableStore.js"
</script>

<h1>Store</h1>
<Router>
    <Link to="/cart"><div class="classless"><img src="https://img.cppng.com/download/2020-06/8-2-cart-picture.png" alt="cart"><p>({$cart.length})</p></div></Link>
</Router> 
<div>
<BeerTable beers={$beers}/>
</div>
<style>
    .classless {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: auto;
    }
    img {
        height: 2em;
        widows: 2em;
    }
    div {
        display: flex;
        justify-content: center;
    }
</style>