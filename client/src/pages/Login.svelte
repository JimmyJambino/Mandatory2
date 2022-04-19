<script>
    import fetchPost from "../../scripts/utils.js"
    import {baseURL} from "../store/generalStore.js"
    import {isLoggedIn} from "../store/writeableStore.js"
    import {Router, Link, useNavigate} from "svelte-navigator"
    import {toast} from "@zerodevx/svelte-toast"
    let email
    let hpw
    const navigate = useNavigate()
    async function login() {
        const userLogin = {
            "email": email,
            "password": hpw
        }
        const data = await fetchPost($baseURL+"/api/customers/login", userLogin).then(res => res.json())
        if(data.customer) {
            isLoggedIn.update(n => !n)
            toast.push('Successfully signed in :)')
            navigate("/")
        } else if(data.errorMsg === "password") {
            document.getElementById("errorMsg").innerText = "Incorrect Password"
            document.getElementById("password").value = ""
        }
        else {
        document.getElementById("errorMsg").innerText = "Email not found in database"
        }
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