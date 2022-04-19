<script>
    import fetchPost from "../../scripts/utils.js"
    import {baseURL} from "../store/generalStore.js"
    import {useNavigate} from "svelte-navigator"
    import {toast} from "@zerodevx/svelte-toast"
    const navigate = useNavigate()
    let email
    let pw
    let firstName
    let lastName
    
    async function signup() {
        let response = {}
        if(email && pw && firstName && lastName) {
            response = await fetchPost($baseURL+"/api/customers/",{firstName, lastName, email, pw}).then(res => res.json())
            console.log(response)
            if(response.errorMsg === "emailUsed") {
                document.getElementById("errorMsg").innerText = "Email already in use"
                email = ""
            } else {
                navigate("/")
                toast.push("Registration successful! Check your email for a welcome message!")
            }
        } else {
            document.getElementById("errorMsg").innerText = "All fields must be filled out."
        }
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
        <p id="errorMsg"></p>
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