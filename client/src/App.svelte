<script>
	import {Router, Link, Route} from "svelte-navigator"
	import Store from "./pages/Store.svelte"
	import Home from "./pages/Home.svelte"
	import Login from "./pages/Login.svelte"
	import Logout from "./pages/Logout.svelte"
	import Register from "./pages/Register.svelte"
	import Cart from "./pages/Cart.svelte"
	import isLoggedIn from "./store/writeableStore.js" // also check with fetch for session?
	
	
	
</script>

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