<script>
	import {Router, Link, Route} from "svelte-navigator"
	import Store from "./pages/Store.svelte"
	import Home from "./pages/Home.svelte"
	import Login from "./pages/Login.svelte"
	import Logout from "./pages/Logout.svelte"
	import Register from "./pages/Register.svelte"
	import Cart from "./pages/Cart.svelte"
	import Header from "./components/Header/Header.svelte"
	import {isLoggedIn} from "./store/writeableStore.js"
	import {baseURL} from "./store/generalStore.js"
    import {onMount} from "svelte"
	import {beers} from "./store/writeableStore.js"
	import {SvelteToast, toast} from '@zerodevx/svelte-toast'

    onMount(async ()=> { 
        const response = await fetch($baseURL+"/api/beers") 
		const data = await response.json() 
        beers.update(() => data)
	})
	setInterval(async () => {
		const response = await fetch($baseURL+"/api/beers") 
		const data = await response.json() 
        beers.update(() => data)
		console.log("1 minute has passed")
	}, 60000) // once every minute

	//const options = {} // Can change theme of toast etc.
</script>
<Header/>
<SvelteToast/>
<button on:click={() => toast.push('Hello world!')}>EMIT TOAST</button>
<main>
	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/store">Store</Link>
			{#if $isLoggedIn}
			<Link to="/logout">Logout</Link>
			{:else}
			<Link to="/login">Login</Link>
			{/if}
		</nav>
	
		<Route path="/store" component={Store} />
		<Route path="/" component={Home} />
		<Route path="/login" component={Login}/>
		<Route path="/logout" component={Logout}/>
		<Route path="/register" component={Register}/>
		<Route path="/cart" component={Cart}/>
	</Router>
</main>

<style>
	nav {
		border-color: black;
		border: 0.5em;
		border-style: solid;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>