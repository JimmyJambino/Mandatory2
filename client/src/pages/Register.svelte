<script>
    import fetchPost from "../../scripts/utils.js"
    import {baseURL} from "../store/generalStore.js"
    let email
    let pw
    let firstName
    let lastName
    
    async function signup() {
        // fetch post and check if email is already in use, then clear email field, otherwise go to success page / store page with a notification that sign up is complete.
        // Send email from backend as well
        const response = await fetchPost($baseURL+"/api/customers/",{firstName, lastName, email, pw}).then(res => res.json())
        console.log(response)
    }
</script>

<h1>Register</h1>
<div class="container">
    <div class="inputRows">
        <input type=text bind:value={firstName} placeholder="First Name">
        <input type=text bind:value={lastName} placeholder="Last Name">
        <input type=text id="email" bind:value={email} placeholder="Email">
        <input type=text bind:value={pw} placeholder="Password">
        <button on:click={signup}>Register</button>
    </div>
</div>
<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .inputRows {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 20em;
    }
</style>