export default function login() {
    return `
        <h1>Login Page</h1>
        <br><br>
        <form action="/submit" method="post">
            <input type="text" placeholder="Enter name" />
            <br><br>
            <input type="password" placeholder="Enter password" />
            <br><br>
            <input type="number" placeholder="Enter phone number" />
            <br><br>
            <button>Submit</button>
        </form>
    `;
}
