const AuthViewModel = require('../models/view/AuthViewModel');

class ViewController {
    // Render login page
    renderLogin(req, res) {
        const viewModel = AuthViewModel.getLoginViewModel();
        res.render('auth/login', viewModel);
    }

    // Render register page
    renderRegister(req, res) {
        const viewModel = AuthViewModel.getRegisterViewModel();
        res.render('auth/register', viewModel);
    }

    // Render dashboard
    renderDashboard(req, res) {
        res.render('dashboard', {
            title: 'QuickTools Dashboard',
            user: req.user
        });
    }
}

module.exports = new ViewController();