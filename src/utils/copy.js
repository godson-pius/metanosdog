import { toast } from "react-toastify"

export const copyValue = (value) => {
    navigator.clipboard.writeText(value)
    toast.success(value + " copied", { position: 'top-center' });
}