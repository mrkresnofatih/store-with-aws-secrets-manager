import { SecretsManager } from "@aws-sdk/client-secrets-manager"; 

const scm = new SecretsManager({
    credentials: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey"
    },
    region: "region"
})

let username = "";
let password = "";

const getBlogCredentials = () => scm.getSecretValue({
    SecretId: "secretArn"
}, (e, data) => {
    if (e) {
        console.log("error: " + e)
    } else {
        if (data?.SecretString) {
            var json = JSON.parse(data.SecretString);
            username = json["blogusername"];
            password = json["blogpassword"];

            console.log(`Username: ${username}, Password: ${password}!`)
        }
    }
})

getBlogCredentials();