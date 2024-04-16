import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

const pw = new random.RandomPassword("pw", {
    length: 20
})

const pw2 = new random.RandomPassword("pw2", {
    length: 20
})

export const password = pw.result;

export const password2 = pw2.result