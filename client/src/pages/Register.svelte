<script>
    let email
    let hpw
    let firstName
    let lastName
    
    async function signup() {
        // fetch post and check if email is already in use, then clear email field, otherwise go to success page / store page with a notification that sign up is complete.
        // Send email from backend as well
    }
</script>
<h1>Register</h1>

<input type=text bind:value={firstName} placeholder="First Name">
<input type=text bind:value={lastName} placeholder="Last Name">
<input type=text id="email" bind:value={email} placeholder="Email">
<input type=text bind:value={hpw} placeholder="Password">
<button on:click={signup}>Register</button>