import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartListProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const pushCart = (obj) => {
        if (cart.length == 0) {
            let current = [...cart]
            current.push({ ...obj, count: 1 })
            setCart(current)
        } else {
            let current = [...cart]
            let fined = current.find((prod) => {
                return prod?.id == obj?.id
            })

            if (!fined) {
                current.push({ ...obj, count: 1 })
                setCart(current)
            }
            else {
                alert("Bu mahsulot savatchada bor")
            }
            // console.log(fined);

        }

    }

    const incr = (i) => {
        let current = [...cart]
        if (cart[i].stock > 1) {
            current[i].count += 1
            cart[i].stock -= 1
        }
        else {
            // alert("Bu mahsulot qolmadi")
            toast.warning("Mahsulot qolmadi")
        }
        setCart(current)
        console.log(cart[i].stock);
    }
    const decr = (i) => {
        let current = [...cart]
        if (current[i].count > 1) {
            current[i].count -= 1
            cart[i].stock += 1
        }
        else {
            toast.error("Mahsulot o'chirildi")
            current.splice(i, 1)
        }
        setCart(current)
        console.log(cart[i].stock);
    }
    const deleteBtn = (i) => {
        let current = [...cart]
        current.splice(i, 1)
        setCart(current)
        toast.error("Mahsulot o'chirildi")
    }

    return (<CartContext.Provider value={{ cart, setCart, pushCart, incr, decr, deleteBtn }}>
        {children}
    </CartContext.Provider>
    );
}

export default CartListProvider