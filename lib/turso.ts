import { createClient } from "@libsql/client/web";

export const client = createClient({
    url: "libsql://cuddly-pandemic-poseisharp.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTE3MjY1NDgsImlkIjoiODhkZGY2ZTctMzdmYi0xMWVlLWFhNTAtNmVkN2NhYjdkOGRmIn0.IyB8pTT7Ke9w0K-KO55PF6pt1llJnijC0r9dvXVXbjCSnSLQs8AB5Dr4f3pgBPurc5-bzejNl6t1XDE7MKF-Cg"
});
