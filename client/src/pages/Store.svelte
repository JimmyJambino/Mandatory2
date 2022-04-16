<script>
    import BeerTable from "../components/Table/BeerTable.svelte"
	import {baseURL} from "../store/generalStore.js"
    import {onMount} from "svelte"
    import {Router, Link} from "svelte-navigator"
    import {cart} from "../store/writeableStore.js"
    let beers = []
    onMount(async ()=> { // calls this function when the component mounts/loads
        const response = await fetch($baseURL+"/beers") 
		const data = await response.json() // {data} to specify/destructure what we want from the database, but right now it is not applicable.
        beers = []
        data.forEach(beer => {
            beers.push(beer)
        })
        beers = beers
	})
    
</script>

<h1>Store</h1>
<Router>
    <Link to="/cart"><div class="classless"><img src="https://img.cppng.com/download/2020-06/8-2-cart-picture.png" alt="cart"><p>({$cart.length})</p></div></Link>
</Router> 
<BeerTable beers={beers}/>

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
</style>