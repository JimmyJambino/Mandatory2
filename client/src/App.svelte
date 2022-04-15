<script>
	import {Router, Link, Route} from "svelte-navigator"
	import About from "./pages/About.svelte"
	import Home from "./pages/Home.svelte"
	import Login from "./pages/Login.svelte"
	import {onMount} from "svelte"
	import {baseURL} from "./store/generalStore.js"
	onMount(async ()=> { // calls this function when the component mounts/loads
		//const response = await fetch($baseURL+"/customers") //Remember to import cors in backend for this to work.
		//const {data} = await response.json() // {data} to specify/destructure what we want from the database, but right now it is not applicable.
		//console.log(data)
	})
</script>

<main>
	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/login">Login</Link>
		</nav>
	
		<Route path="/about" component={About} />
		<Route path="/" component={Home} />
		<Route path="/login" component={Login}/>
	</Router>

	<h1>Wielkommen</h1>
	<button on:click={ async() => {
		const res = await fetch($baseURL+"/beers")
		const data = await res.json()
		console.log(data)
	}}>Test Response</button>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>