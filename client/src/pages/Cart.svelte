<script>
    import {cart} from "../store/writeableStore.js"
    import CartTable from "../components/Table/CartTable.svelte"
    import {isLoggedIn} from "../store/writeableStore.js"
    import {useNavigate} from "svelte-navigator"
    import {toast} from "@zerodevx/svelte-toast"
    import fetchPost from "../../scripts/utils.js"
    import {baseURL} from "../store/generalStore.js"

    const navigate = useNavigate()
    function checkoutCart() {
        if($isLoggedIn) {
            toast.push("Congratulations on your purchase!")
            fetchPost($baseURL+"/api/beers/purchase", $cart)
            $cart = []
            navigate("/")
            // DB stuff.
        } else {
            navigate("/login")
            toast.push("You must be logged in before checking out. Please login or register.")
        }
    }
</script>

<h1>Items in your cart</h1>
<div>
<CartTable isShop={false} beers={$cart}/>
</div>
<div> 
<button on:click={checkoutCart}>Check out</button>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        margin: 2em;
    }
</style>
