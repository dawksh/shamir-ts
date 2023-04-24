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

async function getSecret(keys: Array<keys>): Promise<number> {

    let l0 = keys[0].y * keys[1].x * -1 / (keys[0].x - keys[1].x);
    let l1 = keys[1].y * keys[0].x * -1 / (keys[1].x - keys[0].x);

    return l0 + l1
}
