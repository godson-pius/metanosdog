import { useFlutterwave } from "flutterwave-react-v3";

export const handleFlutterPayment = (amount, email, phone, name, desc) => {
    const config = {
        public_key: "FLWPUBK_TEST-3e1a371f3d4cf1fbe79c81aa128a13ea-X",
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: `${email}}`,
            phone_number: `${phone}}`,
            name: `${name}`,
        },
        customizations: {
            title: 'Trade Point Network',
            description: desc,
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };
    return useFlutterwave(config);
} 