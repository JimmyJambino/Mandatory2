<script>
    import {baseURL} from "../store/generalStore.js"
    import {isLoggedIn} from "../store/writeableStore.js"
    isLoggedIn.update(n => !n)
    fetch($baseURL+"/api/customers/logout")
</script>
<h1>Sup homie you're in the end game now.</h1>