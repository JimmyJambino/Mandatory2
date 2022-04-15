<script>
    let user
    let hpw
    function login() {
        console.log(user)
        console.log(hpw)
    }
</script>

<h1>Login Page</h1>

<input type=text bind:value={user} placeholder="Email">
<input type=text bind:value={hpw} placeholder="Password">

<button on:click={login}>Login</button>