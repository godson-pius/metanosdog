export const monnifyConfig = (amount, currency="NGN", name, email, desc, phone) => {
    const config = {
        amount: amount,
        currency: currency,
        reference: `${new String(new Date().getTime())}`,
        customerName: name,
        customerEmail: email,
        apiKey: 'MK_TEST_Z71M9XWEPA',
        contractCode: '8730249385',
        paymentDescription: desc,
        metadata: {
            name: name
        },
        isTestMode: true,
        customerPhoneNumber: phone,
    }

    return config
}