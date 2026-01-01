import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('Hello everyone');
    res.send('Server is working!');
});

// Handle user registration
app.post('/api/users', async (req,res)=>{
    try {
        console.log('Received user data:', req.body);
        
        // Fetch existing users to get the current length
        const usersResponse = await axios.get('http://localhost:3000/users');
        const users = usersResponse.data;
        
        // Create new user object
        const newUser = {
            id: String(users.length + 1),
            name: req.body.name,
            userName: req.body.userName,
            userProfile: req.body.userProfile,
            age: req.body.age || 18,
            email: req.body.email,
            password: req.body.password
        };
        
        // Post to json-server
        const response = await axios.post('http://localhost:3000/users', newUser);
        
        console.log('User created successfully:', response.data);
        res.status(201).json(response.data);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ 
            error: error.message 
        });
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT}`);
});
