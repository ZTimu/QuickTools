class AuthViewModel {
    constructor() {
        this.loginFormData = {
            title: 'QuickTools Login',
            fields: [
                { type: 'email', id: 'email', name: 'email', label: 'Email:', required: true },
                { type: 'password', id: 'password', name: 'password', label: 'Password:', required: true }
            ],
            submitButton: 'Login',
            registerLink: {
                text: "Don't have an account?",
                linkText: 'Register here',
                href: '/register'
            }
        };

        this.registerFormData = {
            title: 'QuickTools Register',
            fields: [
                { type: 'text', id: 'name', name: 'name', label: 'Name:', required: true },
                { type: 'email', id: 'email', name: 'email', label: 'Email:', required: true },
                { type: 'password', id: 'password', name: 'password', label: 'Password:', required: true }
            ],
            submitButton: 'Register',
            loginLink: {
                text: 'Already have an account?',
                linkText: 'Login here',
                href: '/login'
            }
        };
    }

    getLoginViewModel() {
        return this.loginFormData;
    }

    getRegisterViewModel() {
        return this.registerFormData;
    }
}

module.exports = new AuthViewModel();