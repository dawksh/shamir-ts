type keys = {
    x: number,
    y: number
}


async function generateKeys(secret: number): Promise<Array<keys>> {

    // generate a polynomial
    let x: number = Math.floor(Math.random() * 100) - 1;
    let y = secret + x;

    // generate 4 secrets
    const secrets = [1, 2, 3, 4].map((el: number) => {
        return {
            x: el,
            y: secret + (el * x)
        }
    })
    return secrets
}
