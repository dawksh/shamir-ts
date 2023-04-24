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


async function testShamir() {
    const superDuperSecret = Math.floor(Math.random() * 100);
    const quorumKeys: keys[] = await generateKeys(superDuperSecret);
    const index = [];
    while (index.length < 2) {
        let r = Math.floor(Math.random() * 4);
        if (index.indexOf(r) === -1) index.push(r);
    }

    const secret = await getSecret([quorumKeys[index[0]], quorumKeys[index[1]]])
    console.log("super duper secret: ", superDuperSecret);
    console.log("secret: ", secret);
}

testShamir()