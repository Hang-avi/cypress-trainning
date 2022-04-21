class LoginPage {
    private emailField: string;
    private passwordField: string
    private email: string;
    private password: string
    private signIn: string

    constructor() {
        this.emailField = '#email';
        this.passwordField = '#passwd';
        this.email = 'aperdomobo@gmail.com';
        this.password = 'WorkshopProtractor';
        this.signIn = '#SubmitLogin';
    }

    public enterEmail(): void {
        cy.get(this.emailField).type(this.email)
    }

    public enterPassword(): void {
        cy.get(this.passwordField).type(this.password)
    }

    public submitSignIn(): void {
        cy.get(this.signIn).click()
    }

}
export { LoginPage }