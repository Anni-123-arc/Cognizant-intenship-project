import mongoose from 'mongoose';

const UserQuerySchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },
    userImage: {
        type: String,
        default: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    userName: {
        type: String,
        required: true
    },
    userMessage: {
        type: String,
        required: true
    },
    userQueryDate: {
        type: String,
        default: () => new Date().toISOString().split('T')[0]
    },
    reply: {
        type: String,
        default:""
    }
}, { collection: 'userQueries' });

export default mongoose.model('UserQuery', UserQuerySchema);
