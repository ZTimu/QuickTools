const UserService = require('../services/UserService');

class UserController {
    // Register a new user
    async register(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            const { token } = await UserService.authenticateUser(req.body.email, req.body.password);
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    // Login user
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { token } = await UserService.authenticateUser(email, password);
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    // Get user profile
    async getProfile(req, res) {
        try {
            const user = await User.findById(req.user.id).select('-password');
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new UserController();