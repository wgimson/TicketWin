var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var EventSchema   = new Schema({
    title: {
        type:     String,
        required: [true, 'A title is required'] 
    },
    description:        String,
    start_date:         Date,
    end_date:           Date,
    user_id:            Schema.ObjectId,
    created_at: {        
        type:     Date,
        required: [true, 'Create Date cannot be Null']
    },
    updated_at:         Date,
    status: {            
        type: String,
        enum: ['pending', 'confirmed', 'in progress', 'over']
    },
    image_file_name:    String,
    image_content_type: {
        type: String,
        enum: ['jpg', 'gif', 'bmp', 'png']
    },
    image_file_size:    Number,
    image_updated_at:   Date,
    location:           String,
    organization_id:    Number,
    is_featured:        Boolean
}, { collection: 'Events' });

module.exports = mongoose.model('Event', EventSchema);