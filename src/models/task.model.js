const { model, Schema } = require('mongoose');

const TaskSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'Users',
        required: true
    },
});

module.exports = model('Tasks', TaskSchema);