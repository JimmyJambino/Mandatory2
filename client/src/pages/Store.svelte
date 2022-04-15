<script>
    import BeerTable from "../components/Table/BeerTable.svelte"
	import {baseURL} from "../store/generalStore.js"
    import {onMount} from "svelte"
    import {Router, Link} from "svelte-navigator"
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
    let cart = []
</script>

<h1>Store</h1>
<Router>
    <Link to="/cart"><img src="https://www.picng.com/upload/shopping_cart/png_shopping_cart_33838.png"></Link>
<p>({cart.length})</p>
</Router> 
<BeerTable beers={beers}/>

<style>
    img {
        height: 2em;
        widows: 2em;
    }
</style>