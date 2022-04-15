<script>
    import fetchPost from "../../scripts/utils.js"
    import {baseURL} from "../store/generalStore.js"
    import isLoggedIn from "../store/writeableStore.js"
    import {Router, Link, Route} from "svelte-navigator"
    import Register from "./Register.svelte"
    let email
    let hpw
    async function login() { // change buttons or page or something if successful, given response from backend.
        const user = {
            "email": email,
            "password": hpw
        }
        const data = await fetchPost($baseURL+"/api/customers", user).then(res => res.json())
        if(data.customer) { // Checks if a customer was found
            isLoggedIn.update(n => !n)
        } else if(data.errorMsg === "password") {
            document.getElementById("errorMsg").innerText = "Incorrect Password"
            document.getElementById("password").value = ""
        }
        else { // doesn't exist
        document.getElementById("errorMsg").innerText = "Email not found in database"
        }
        console.log(data)
    }
</script>

<h1>Login Page</h1>

<input type=text bind:value={email} placeholder="Email">
<input id="password" type=password bind:value={hpw} placeholder="Password">
<div class="container">
    <div class="buttons">
        <button on:click={login}>Login</button>
        <p>Not a customer yet? Register below!</p>
        <Router>
            <Link to="/register">Register</Link>
        </Router>
    <p id="errorMsg"></p>
    </div>
</div>
<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 20em;
    }
</style>