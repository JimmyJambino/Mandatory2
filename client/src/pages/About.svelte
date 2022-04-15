<script>
    import BeerTable from "../components/Table/BeerTable.svelte"
	import {baseURL} from "../store/generalStore.js"
    import {onMount} from "svelte"
    let beers = []
    onMount(async ()=> { // calls this function when the component mounts/loads
        const response = await fetch($baseURL+"/beers") //Remember to import cors in backend for this to work.
		const {data} = await response.json() // {data} to specify/destructure what we want from the database, but right now it is not applicable.
		console.log(data)
	})
</script>

<h1>About</h1>
<BeerTable beers={beers}/>



<button on:click={ async() => {
    const res = await fetch($baseURL+"/beers")
    const data = await res.json()
    data.forEach(beer => {
        beers = [...beers, beer]
    })
}}>Test Response</button>
